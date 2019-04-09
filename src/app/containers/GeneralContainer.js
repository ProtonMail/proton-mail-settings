import React from 'react';
import { LanguageSection, DesktopNotificationSection, MessagesSection, ShortcutsSection } from 'react-components';

const GeneralContainer = () => {
    return (
        <>
            <LanguageSection />
            <DesktopNotificationSection />
            <MessagesSection />
            <ShortcutsSection />
        </>
    );
};

export default GeneralContainer;
