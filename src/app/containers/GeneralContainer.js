import React from 'react';
import {
    LanguageSection,
    DesktopNotificationSection,
    MessagesSection,
    ShortcutsSection,
    ObserverSections,
    ContactsSection
} from 'react-components';

const GeneralContainer = () => {
    return (
        <ObserverSections>
            <LanguageSection id="language" />
            <DesktopNotificationSection id="desktop-notifications" />
            <MessagesSection id="messages" />
            <ContactsSection id="contacts" />
            <ShortcutsSection id="shortcuts" />
        </ObserverSections>
    );
};

export default GeneralContainer;
