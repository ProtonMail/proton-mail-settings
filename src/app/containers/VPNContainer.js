import React from 'react';
import { c } from 'ttag';
import {
    ProtonVPNClientsSection,
    OpenVPNAccountSection,
    ProtonVPNResourcesSection,
    ProtonVPNCredentialsSection
} from 'react-components';
import Page from '../components/Page';

// TODO: permissions?
export const getVPNPage = () => {
    return {
        text: c('Title').t`ProtonVPN`,
        route: '/settings/vpn',
        icon: 'protonvpn',
        sections: [
            {
                text: c('Title').t`ProtonVPN Clients`,
                id: 'protonvpn-clients'
            },
            {
                text: c('Title').t`ProtonVPN Credentials`,
                id: 'protonvpn-credentials'
            },
            {
                text: c('Title').t`OpenVPN / IKEv2 Username`,
                id: 'openvpn-ikev2-username'
            },
            {
                text: c('Title').t`ProtonVPN Resources`,
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
