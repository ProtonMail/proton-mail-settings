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
    Search
} from 'react-components';
import { getIncomingDefaults } from 'proton-shared/lib/api/incomingDefaults';

import useSpamList from './useSpamList';
import SpamListItem from '../../components/Filters/SpamListItem';

function LabelsContainer() {
    const { blackList, whiteList, loading, move } = useSpamList();

    // const { result: { IncomingDefaults = [] } = {}, loading } =  useApiResult(getIncomingDefaults, []);
    // const [ list, setList ] = useState(IncomingDefaults);

    // useEffect(() => {
    //     setList(IncomingDefaults);
    // }, [ list ])

    const handleSeachChange = console.log;
    const handleClickMoveTo = (type, item) => () => {
        move(type, item);
    };
    const handleClickRemove = (item) => () => {
        console.log(item);
    };

    console.log({ whiteList, blackList, loading });
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
                            onClickMoveTo={handleClickMoveTo}
                            onClickRemove={handleClickRemove}
                        />
                        <SpamListItem
                            list={blackList}
                            type="blacklist"
                            dest="whitelist"
                            onClickMoveTo={handleClickMoveTo}
                            onClickRemove={handleClickRemove}
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default LabelsContainer;
