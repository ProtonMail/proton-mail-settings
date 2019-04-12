import { useEffect, useState } from 'react';
import { defer } from 'proton-shared/lib/helpers/function';
import { MAILBOX_IDENTIFIERS } from 'proton-shared/lib/constants';

const BLACKLIST_TYPE = +MAILBOX_IDENTIFIERS.spam;
const WHITELIST_TYPE = +MAILBOX_IDENTIFIERS.inbox;

const useSpamList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [whiteList, setWhiteList] = useState([]);
    const [blackList, setBlackList] = useState([]);
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

    /**
     * Move an email from a list to another
     * @param  {String} dest       (white|black)list
     * @param  {String} options.ID Email's ID
     * @return {void}
     */
    const move = (dest, data) => {
        if (dest === 'whitelist') {
            refreshBlackList(blackList.filter((item) => item.ID !== data.ID));
            refreshWhiteList(whiteList.concat(data));
        }

        if (dest === 'blacklist') {
            refreshWhiteList(whiteList.filter((item) => item.ID !== data.ID));
            refreshBlackList(blackList.concat(data));
        }

        defer(() => {
            searchQuery && search(searchQuery);
        }, 1000);
    };

    /**
     * Remove an email from a list
     * @param  {String} options.ID       Email's ID
     * @param  {Number} options.Location Email's Location, either Spam or not
     * @return {void}
     */
    const remove = ({ ID, Location }) => {
        if (Location === WHITELIST_TYPE) {
            refreshWhiteList(whiteList.filter((item) => item.ID !== ID));
        }

        if (Location === BLACKLIST_TYPE) {
            refreshBlackList(blackList.filter((item) => item.ID !== ID));
        }

        defer(() => {
            searchQuery && search(searchQuery);
        }, 1000);
    };

    /**
     * Move an email from a list to another
     * @param  {String} dest       (white|black)list
     * @param  {String} options.ID Email's ID
     * @return {void}
     */
    const create = (dest, data) => {
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
    const search = (input = '') => {
        const defaultFilter = (i) => i;
        const filter = input ? ({ Email }) => Email.toLowerCase().includes(input.toLowerCase()) : defaultFilter;
        setSearchQuery(input);

        refreshWhiteList(whiteList.filter(filter), false);
        refreshBlackList(blackList.filter(filter), false);
    };

    return {
        whiteList: whiteListFiltered,
        blackList: blackListFiltered,
        refreshWhiteList,
        refreshBlackList,
        remove,
        create,
        search,
        move
    };
};

export default useSpamList;
