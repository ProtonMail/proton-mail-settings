import { useEffect, useState } from 'react';
import { useApiResult, useApiWithoutResult } from 'react-components';
import {
    getIncomingDefaults,
    updateIncomingDefault,
    deleteIncomingDefaults,
    addIncomingDefault
} from 'proton-shared/lib/api/incomingDefaults';
import { defer } from 'proton-shared/lib/helpers/function';
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
    const requestCreate = useApiWithoutResult(addIncomingDefault);

    const [searchQuery, setSearchQuery] = useState('');
    const [whiteList, setWhiteList] = useState(white.IncomingDefaults || []);
    const [blackList, setBlackList] = useState(black.IncomingDefaults || []);

    const [whiteListFiltered, filterWhiteList] = useState(whiteList);
    const [blackListFiltered, filterBlackList] = useState(blackList);

    /**
     * Manage the data for the view as we will need
     *     - a state with the list
     *     - a state with the filtered version of the list
     * @param  {String} type  Type of list
     * @return {Function}       (data:<Array>, updateRawList:<Boolean:true>)
     */
    const refreshList = (type) => (data, updateRawList = true) => {
        if (type === 'blackList') {
            updateRawList && setBlackList(data);
            return filterBlackList(data);
        }

        updateRawList && setWhiteList(data);
        return filterWhiteList(data);
    };
    const refreshWhiteList = refreshList('whitelist');
    const refreshBlackList = refreshList('blackList');

    useEffect(() => {
        refreshWhiteList(white.IncomingDefaults || []);
    }, [white.IncomingDefaults]);

    useEffect(() => {
        refreshBlackList(black.IncomingDefaults || []);
    }, [black.IncomingDefaults]);

    /**
     * Move an email from a list to another
     * @param  {String} dest       (white|black)list
     * @param  {String} options.ID Email's ID
     * @return {void}
     */
    const move = async (dest, { ID }) => {
        const Location = dest === 'whitelist' ? WHITELIST_TYPE : BLACKLIST_TYPE;
        const { IncomingDefault: data } = await requestUpdate.request(ID, { Location });

        if (dest === 'whitelist') {
            refreshBlackList(blackList.filter((item) => item.ID !== ID));
            refreshWhiteList(whiteList.concat(data));
        }

        if (dest === 'blacklist') {
            refreshWhiteList(whiteList.filter((item) => item.ID !== ID));
            refreshBlackList(blackList.concat(data));
        }
    };

    /**
     * Remove an email from a list
     * @param  {String} options.ID       Email's ID
     * @param  {Number} options.Location Email's Location, either Spam or not
     * @return {void}
     */
    const remove = async ({ ID, Location }) => {
        await requestDelete.request([ID]);
        if (Location === WHITELIST_TYPE) {
            return refreshWhiteList(whiteList.filter((item) => item.ID !== ID));
        }
        refreshBlackList(blackList.filter((item) => item.ID !== ID));
    };

    /**
     * Move an email from a list to another
     * @param  {String} dest       (white|black)list
     * @param  {String} options.ID Email's ID
     * @return {void}
     */
    const create = async (dest, { value: Email }) => {
        const Location = dest === 'whitelist' ? WHITELIST_TYPE : BLACKLIST_TYPE;
        const { IncomingDefault: data } = await requestCreate.request({ Location, Email });

        if (dest === 'whitelist') {
            setWhiteList(whiteList.concat(data));
        }

        if (dest === 'blacklist') {
            setBlackList(blackList.concat(data));
        }

        defer(() => {
            searchQuery && search(searchQuery);
        }, 1000);
    };

    /**
     * Search through the list for matches.
     * Only update the filtered list as we don't want to lose the satte
     * @param  {String} input search value
     * @return {void}
     */
    const search = (input) => {
        const defaultFilter = (i) => i;
        const filter = input ? ({ Email }) => Email.toLowerCase().includes(input.toLowerCase()) : defaultFilter;
        setSearchQuery(input);

        refreshWhiteList(whiteList.filter(filter), false);
        refreshBlackList(blackList.filter(filter), false);
    };

    return {
        whiteList: whiteListFiltered,
        blackList: blackListFiltered,
        loading: loadingBlack || loadingWhite,
        remove,
        create,
        search,
        move
    };
};

export default useSpamList;
