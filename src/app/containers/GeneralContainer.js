import React from 'react';
import { c } from 'ttag';
import {
    LanguageSection,
    DesktopNotificationSection,
    MessagesSection,
    ShortcutsSection,
    ContactsSection,
    SearchSection
} from 'react-components';

import Page from '../components/Page';

export const getGeneralPage = () => {
    return {
        text: c('Title').t`General`,
        route: '/settings/general',
        sections: [
            {
                text: c('Title').t`Language`,
                id: 'language'
            },
            {
                text: c('Title').t`Desktop notifications`,
                id: 'desktop-notifications'
            },
            {
                text: c('Title').t`Messages`,
                id: 'messages'
            },
            {
                text: c('Title').t`Contacts`,
                id: 'contacts'
            },
            {
                text: c('Title').t`Search`,
                id: 'search'
            },
            {
                text: c('Title').t`Shortcuts`,
                id: 'shortcuts'
            }
        ]
    };
};

const GeneralContainer = () => {
    return (
        <Page config={getGeneralPage()}>
            <LanguageSection />
            <DesktopNotificationSection />
            <MessagesSection />
            <ContactsSection />
            <SearchSection />
            <ShortcutsSection />
        </Page>
    );
};

export default GeneralContainer;
