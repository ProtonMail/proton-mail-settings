import React from 'react';
import { c } from 'ttag';
import {
    ProtonVPNClientsSection,
    OpenVPNAccountSection,
    ProtonVPNResourcesSection,
    ProtonVPNCredentialsSection,
    SettingsPropsShared
} from 'react-components';
import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getVPNPage = () => {
    return {
        text: c('Title').t`ProtonVPN`,
        to: '/vpn',
        icon: 'protonvpn',
        subsections: [
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

const VPNContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getVPNPage()}
            setActiveSection={setActiveSection}
        >
            <ProtonVPNClientsSection />
            <ProtonVPNCredentialsSection />
            <OpenVPNAccountSection />
            <ProtonVPNResourcesSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default VPNContainer;
