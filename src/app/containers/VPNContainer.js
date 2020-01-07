import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import {
    ProtonVPNClientsSection,
    OpenVPNAccountSection,
    ProtonVPNResourcesSection,
    ProtonVPNCredentialsSection
} from 'react-components';
import Page from '../components/Page';

export const getVPNPage = () => {
    return {
        text: c('Title').t`ProtonVPN`,
        route: '/settings/vpn',
        icon: 'protonvpn',
        sections: [
            {
                text: c('Title').t`ProtonVPN clients`,
                id: 'protonvpn-clients'
            },
            {
                text: c('Title').t`ProtonVPN credentials`,
                id: 'protonvpn-credentials'
            },
            {
                text: c('Title').t`OpenVPN / IKEv2 username`,
                id: 'openvpn-ikev2-username'
            },
            {
                text: c('Title').t`ProtonVPN resources`,
                id: 'protonvpn-resources'
            }
        ]
    };
};

const VPNContainer = ({ setActiveSection }) => {
    return (
        <Page config={getVPNPage()} setActiveSection={setActiveSection}>
            <ProtonVPNClientsSection />
            <ProtonVPNCredentialsSection />
            <OpenVPNAccountSection />
            <ProtonVPNResourcesSection />
        </Page>
    );
};

VPNContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default VPNContainer;
