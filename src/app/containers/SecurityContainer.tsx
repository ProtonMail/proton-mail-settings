import React from 'react';
import {
    SessionsSection,
    LogsSection,
    AddressVerificationSection,
    ExternalPGPSettingsSection,
    SettingsPropsShared
} from 'react-components';
import { c } from 'ttag';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getSecurityPage = () => {
    return {
        text: c('Title').t`Security`,
        link: '/settings/security',
        icon: 'security',
        subsections: [
            {
                text: c('Title').t`Session management`,
                id: 'sessions'
            },
            {
                text: c('Title').t`Authentication logs`,
                id: 'logs'
            },
            {
                text: c('Title').t`Address verification`,
                id: 'address-verification'
            },
            {
                text: c('Title').t`External PGP settings`,
                id: 'pgp-settings'
            }
        ]
    };
};

const SecurityContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getSecurityPage()}
            setActiveSection={setActiveSection}
        >
            <SessionsSection />
            <LogsSection />
            <AddressVerificationSection />
            <ExternalPGPSettingsSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default SecurityContainer;
