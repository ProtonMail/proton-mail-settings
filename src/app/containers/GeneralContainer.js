import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { LanguageSection, DesktopNotificationSection, MessagesSection, ShortcutsSection } from 'react-components';

import locales from '../locales';
import Page from '../components/Page';

export const getGeneralPage = () => {
    return {
        text: c('Title').t`General`,
        route: '/settings/general',
        icon: 'general',
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
                text: c('Title').t`Shortcuts`,
                id: 'shortcuts'
            }
        ]
    };
};

const GeneralContainer = ({ setActiveSection }) => {
    return (
        <Page config={getGeneralPage()} setActiveSection={setActiveSection}>
            <LanguageSection locales={locales} />
            <DesktopNotificationSection />
            <MessagesSection />
            <ShortcutsSection />
        </Page>
    );
};

GeneralContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default GeneralContainer;
