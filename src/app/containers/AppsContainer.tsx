import React from 'react';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import {
    ProtonMailBridgeSection,
    ProtonMailBetaSection,
    ProtonMailAppsSection,
    SettingsPropsShared,
} from 'react-components';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { PAID_MAIL } = PERMISSIONS;

export const getAppsPage = () => {
    return {
        text: c('Title').t`Apps`,
        to: '/apps',
        icon: 'vpn-connx',
        subsections: [
            {
                text: c('Title').t`ProtonMail Bridge`,
                id: 'protonmail-bridge',
                permissions: [PAID_MAIL],
            },
            {
                text: c('Title').t`ProtonMail apps`,
                id: 'protonmail-apps',
            },
            {
                text: c('Title').t`ProtonMail Beta`,
                id: 'protonmail-beta',
            },
        ],
    };
};

const AppsContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getAppsPage()}
            setActiveSection={setActiveSection}
        >
            <ProtonMailBridgeSection />
            <ProtonMailAppsSection />
            <ProtonMailBetaSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default AppsContainer;
