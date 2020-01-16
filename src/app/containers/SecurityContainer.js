import React from 'react';
import PropTypes from 'prop-types';
import { SessionsSection, LogsSection, AddressVerificationSection, ExternalPGPSettingsSection } from 'react-components';
import { c } from 'ttag';

import Page from '../components/Page';

export const getSecurityPage = () => {
    return {
        text: c('Title').t`Security`,
        route: '/settings/security',
        icon: 'security',
        sections: [
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

const SecurityContainer = ({ setActiveSection }) => {
    return (
        <Page config={getSecurityPage()} setActiveSection={setActiveSection}>
            <SessionsSection />
            <LogsSection />
            <AddressVerificationSection />
            <ExternalPGPSettingsSection />
        </Page>
    );
};

SecurityContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default SecurityContainer;
