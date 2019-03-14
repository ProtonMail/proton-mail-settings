import { fetchJson } from 'proton-shared/lib/fetch/fetch';
import configureApi from 'proton-shared/lib/api';
import { setRefreshCookies } from 'proton-shared/lib/api/auth';

import { PASSWORD_WRONG_ERROR } from 'proton-shared/lib/api/auth';
import { CLIENT_ID, APP_VERSION, API_VERSION, API_URL } from '../config';
import { createOnceHandler, STATUS_CODE_UNAUTHORIZED, STATUS_CODE_UNLOCK } from 'proton-shared/lib/apiHandlers';

/**
 * Create the api.
 * @param {String} [UID]
 * @return {function}
 */
export const createApi = (UID) => {
    return configureApi({
        xhr: fetchJson,
        UID,
        API_URL,
        CLIENT_ID,
        API_VERSION,
        APP_VERSION
    });
};

/**
 * Attach a catch handler to every API call to handle 401, 403, and other errors.
 * @param {function} call
 * @param {function} handleUnlock
 * @param {function} handleError
 * @param {function} handleLogout
 * @return {function}
 */
export const withAuthHandlers = ({ call, handleUnlock, handleError, handleLogout }) => {
    /**
     * Handle refresh token. Happens when the access token has expired.
     * Multiple calls can fail, so this ensures the refresh route is called once.
     */
    const refresh = () => call(setRefreshCookies());
    const refreshHandler = createOnceHandler(refresh, handleLogout);

    /**
     * Handle unlock user.
     */
    const unlock = () => {
        return handleUnlock().catch((e) => {
            if (e.data && e.data.Code === PASSWORD_WRONG_ERROR) {
                return unlock();
            }
            throw e;
        });
    };
    const unlockHandler = createOnceHandler(unlock);

    return (options) => {
        return call(options).catch((e) => {
            const status = e.status;

            const retry = () => {
                return call(options).catch((e) => {
                    return handleError(e);
                });
            };

            if (status === STATUS_CODE_UNAUTHORIZED) {
                return refreshHandler().then(retry);
            }

            if (status === STATUS_CODE_UNLOCK) {
                return unlockHandler().then(retry);
            }

            return handleError(e);
        });
    };
};
