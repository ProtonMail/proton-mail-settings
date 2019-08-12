import React from 'react';
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

const VPNContainer = () => {
    return (
        <Page config={getVPNPage()}>
            <ProtonVPNClientsSection />
            <ProtonVPNCredentialsSection />
            <OpenVPNAccountSection />
            <ProtonVPNResourcesSection />
        </Page>
    );
};

export default VPNContainer;
