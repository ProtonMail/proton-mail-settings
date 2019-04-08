import React from 'react';
import { SessionsSection, LogsSection, AddressVerificationSection, ExternalPGPSettingsSection } from 'react-components';

const SecurityContainer = () => {
    return (
        <>
            <SessionsSection />
            <LogsSection />
            <AddressVerificationSection />
            <ExternalPGPSettingsSection />
        </>
    );
};

export default SecurityContainer;
