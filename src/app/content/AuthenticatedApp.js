import React from 'react';
import PropTypes from 'prop-types';
import { srpAuth } from 'proton-shared/lib/srp';
import {
    useNotifications,
    usePrompts,
    ApiContext,
    AuthenticationStoreContext,
    AskPasswordModal
} from 'react-components';
import { getError } from 'proton-shared/lib/apiHandlers';

import { createApi, withAuthHandlers } from '../api';
import { queryUnlock } from 'proton-shared/lib/api/user';
import AuthenticatedAppRoutes from './AuthenticatedAppRoutes';
import ModelsProvider from './ModelsProvider';

const AuthenticatedApp = ({ authenticationStore, onLogout, loginData }) => {
    const { createNotification } = useNotifications();
    const { createPrompt } = usePrompts();

    const handleError = (e) => {
        const { code, message, status } = getError(e);
        createNotification({
            type: 'error',
            text: `${status} - ${code} - ${message}`
        });
        throw e;
    };

    const handleUnlock = async () => {
        const password = await createPrompt((resolve, reject) => {
            return <AskPasswordModal onClose={() => reject()} onSubmit={(value) => resolve(value)} />;
        });
        return srpAuth({
            api,
            credentials: { password },
            config: queryUnlock()
        });
    };

    const UID = authenticationStore.getUID();
    const call = createApi(UID);
    const api = withAuthHandlers({
        call,
        handleError,
        handleUnlock,
        handleLogout: onLogout
    });

    return (
        <ApiContext.Provider value={api}>
            <AuthenticationStoreContext.Provider value={authenticationStore}>
                <ModelsProvider userResult={loginData ? loginData.userResult : undefined}>
                    <AuthenticatedAppRoutes />
                </ModelsProvider>
            </AuthenticationStoreContext.Provider>
        </ApiContext.Provider>
    );
};

AuthenticatedApp.propTypes = {
    authenticationStore: PropTypes.object.isRequired,
    loginData: PropTypes.object,
    onLogout: PropTypes.func.isRequired
};

export default AuthenticatedApp;
