import React from 'react';
import {
    LanguageSection,
    DesktopNotificationSection,
    MessagesSection,
    ShortcutsSection,
    ObserverSections
} from 'react-components';

const GeneralContainer = () => {
    return (
        <ObserverSections>
            <LanguageSection id="language" />
            <DesktopNotificationSection id="desktop-notifications" />
            <MessagesSection id="messages" />
            <ShortcutsSection id="shortcuts" />
        </ObserverSections>
    );
};

export default GeneralContainer;
