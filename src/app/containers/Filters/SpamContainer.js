import React, { useEffect } from 'react';
import { c } from 'ttag';
import { SubTitle, LearnMore, useApiResult, Search } from 'react-components';
import { getIncomingDefaults } from 'proton-shared/lib/api/incomingDefaults';
import { MAILBOX_IDENTIFIERS } from 'proton-shared/lib/constants';

import useSpamList from './useSpamList';
import SpamListItem from '../../components/Filters/SpamListItem';

const BLACKLIST_TYPE = +MAILBOX_IDENTIFIERS.spam;
const WHITELIST_TYPE = +MAILBOX_IDENTIFIERS.inbox;

const getWhiteList = () => getIncomingDefaults({ Location: WHITELIST_TYPE });
const getBlackList = () => getIncomingDefaults({ Location: BLACKLIST_TYPE });

function SpamFiltersContainer() {
    const { blackList, whiteList, refreshWhiteList, refreshBlackList, move, remove, search, create } = useSpamList();
    const { result: white = {}, loading: loadingWhite } = useApiResult(getWhiteList, []);
    const { result: black = {}, loading: loadingBlack } = useApiResult(getBlackList, []);

    useEffect(() => {
        refreshWhiteList(white.IncomingDefaults || []);
    }, [white.IncomingDefaults]);

    useEffect(() => {
        refreshBlackList(black.IncomingDefaults || []);
    }, [black.IncomingDefaults]);

    const handleSeachChange = search;
    const handleAction = (action) => (type, data) => {
        action === 'create' && create(type, data);
        action === 'remove' && remove(data);
        action === 'move' && move(type, data);
    };

    return (
        <>
            <SubTitle>{c('FilterSettings').t('Spam Filters')}</SubTitle>
            <p className="block-info-standard mt1 mb1">
                {c('FilterSettings').t(
                    'Sender specific spam rules can be applied here. Whitelist addresses always go to Inbox while Blacklist addresses always go to Spam. Marking a message as spam adds the address to the Blacklist. Marking a message as not spam adds it to the Whitelist.'
                )}
                <br />
                <LearnMore url="https://protonmail.com" />
            </p>

            <Search
                className="w100"
                onChange={handleSeachChange}
                placeholder={c('FilterSettings').t('Search Whitelist and Blacklist')}
            />

            <div className="flex-autogrid p1">
                <SpamListItem
                    list={whiteList}
                    type="whitelist"
                    dest="blacklist"
                    loading={loadingWhite}
                    onAction={handleAction}
                />
                <SpamListItem
                    list={blackList}
                    type="blacklist"
                    dest="whitelist"
                    className="ml1"
                    loading={loadingBlack}
                    onAction={handleAction}
                />
            </div>
        </>
    );
}

export default SpamFiltersContainer;
