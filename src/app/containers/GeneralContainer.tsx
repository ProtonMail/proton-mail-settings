import React from 'react';
import { c } from 'ttag';
import {
    LanguageSection,
    DesktopNotificationSection,
    MessagesSection,
    ShortcutsSection,
    SettingsPropsShared
} from 'react-components';

import locales from '../locales';
import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getGeneralPage = () => {
    return {
        text: c('Title').t`General`,
        to: '/settings/general',
        icon: 'general',
        subsections: [
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

const GeneralContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getGeneralPage()}
            setActiveSection={setActiveSection}
        >
            <LanguageSection locales={locales} />
            <DesktopNotificationSection />
            <MessagesSection />
            <ShortcutsSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default GeneralContainer;
