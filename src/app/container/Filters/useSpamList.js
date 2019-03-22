import { useEffect, useState } from 'react';
import { useApiResult, useApiWithoutResult } from 'react-components';
import {
    getIncomingDefaults,
    updateIncomingDefault,
    deleteIncomingDefaults
} from 'proton-shared/lib/api/incomingDefaults';
import { MAILBOX_IDENTIFIERS } from 'proton-shared/lib/constants';

const BLACKLIST_TYPE = +MAILBOX_IDENTIFIERS.spam;
const WHITELIST_TYPE = +MAILBOX_IDENTIFIERS.inbox;

const useSpamList = (initialStep = 0) => {
    const getWhiteList = () => getIncomingDefaults({ Location: WHITELIST_TYPE });
    const getBlackList = () => getIncomingDefaults({ Location: BLACKLIST_TYPE });

    const { result: white = {}, loading: loadingWhite } = useApiResult(getWhiteList, []);
    const { result: black = {}, loading: loadingBlack } = useApiResult(getBlackList, []);

    const requestUpdate = useApiWithoutResult(updateIncomingDefault);
    const requestDelete = useApiWithoutResult(deleteIncomingDefaults);

    const [whiteList, setWhiteList] = useState(white.IncomingDefaults || []);
    const [blackList, setBlackList] = useState(black.IncomingDefaults || []);

    useEffect(() => {
        setWhiteList(white.IncomingDefaults || []);
    }, [white.IncomingDefaults]);

    useEffect(() => {
        setBlackList(black.IncomingDefaults || []);
    }, [black.IncomingDefaults]);

    const move = async (dest, { ID }) => {
        const Location = dest === 'whitelist' ? WHITELIST_TYPE : BLACKLIST_TYPE;
        const { IncomingDefault: data } = await requestUpdate.request(ID, { Location });

        if (dest === 'whitelist') {
            setWhiteList(blackList.filter((item) => item.ID !== ID));
            setBlackList(whiteList.concat(data));
        }

        if (dest === 'blacklist') {
            setBlackList(whiteList.filter((item) => item.ID !== ID));
            setWhiteList(blackList.concat(data));
        }
    };

    return {
        whiteList,
        blackList,
        loading: loadingBlack || loadingWhite,
        move
    };
};

export default useSpamList;
