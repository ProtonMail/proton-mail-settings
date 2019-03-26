import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import {
    Title,
    SubTitle,
    Bordered,
    Button,
    Icon,
    LearnMore,
    PrimaryButton,
    useApiResult,
    useApiWithoutResult,
    Search,
    useNotifications
} from 'react-components';
import { getIncomingDefaults } from 'proton-shared/lib/api/incomingDefaults';

import useSpamList from './useSpamList';
import SpamListItem from '../../components/Filters/SpamListItem';
import AddEmailToListModal from './AddEmailToListModal';

function LabelsContainer() {
    const { blackList, whiteList, loading, move, remove, search, create } = useSpamList();
    const { createNotification } = useNotifications();

    const [modalConfig, setModalVisibility] = useState({
        show: false,
        type: 'whitelist'
    });

    const handleSeachChange = (value = '') => {
        search(value);
    };
    const handleClickMoveTo = (type, item) => async () => {
        await move(type, item);
        createNotification({ text: c('Success notification').t`Email moved` });
    };
    const handleClickRemove = (item) => async () => {
        await remove(item);
        createNotification({ text: c('Success notification').t`Email removed` });
    };

    const handleClickAdd = (type) => () => {
        setModalVisibility({
            show: true,
            type
        });
    };

    const handleSubmitModal = async (type, data) => {
        await create(type, data);
        createNotification({ text: c('Success notification').t`Email added` });
        setModalVisibility({ show: false, type });
    };

    const handleCloseModal = () => {
        setModalVisibility({ show: false, type: 'whitelist' });
    };

    return (
        <>
            <Title>{c('FilterSettings').t`Filters`}</Title>
            <div className="p1 center w80">
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

                {loading ? <div className="square-color bordered-container center" aria-busy="true" /> : null}

                {!loading ? (
                    <div className="flex-autogrid p1">
                        <SpamListItem
                            list={whiteList}
                            type="whitelist"
                            dest="blacklist"
                            onClickAdd={handleClickAdd}
                            onClickMoveTo={handleClickMoveTo}
                            onClickRemove={handleClickRemove}
                        />
                        <SpamListItem
                            list={blackList}
                            type="blacklist"
                            dest="whitelist"
                            onClickAdd={handleClickAdd}
                            onClickMoveTo={handleClickMoveTo}
                            onClickRemove={handleClickRemove}
                        />
                    </div>
                ) : null}
                <AddEmailToListModal {...modalConfig} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
            </div>
        </>
    );
}

export default LabelsContainer;
