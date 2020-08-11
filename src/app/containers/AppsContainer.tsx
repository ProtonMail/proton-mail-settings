import React from 'react';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import {
    ProtonMailBridgeSection,
    ProtonMailBetaSection,
    ProtonMailAppsSection,
    SettingsPropsShared
} from 'react-components';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { PAID_MAIL } = PERMISSIONS;

export const getAppsPage = () => {
    return {
        text: c('Title').t`Apps`,
        to: '/apps',
        icon: 'apps',
        subsections: [
            {
                text: c('Title').t`ProtonMail Bridge`,
                id: 'protonmail-bridge',
                permissions: [PAID_MAIL]
            },
            {
                text: c('Title').t`ProtonMail Beta`,
                id: 'protonmail-beta'
            },
            {
                text: c('Title').t`ProtonMail apps`,
                id: 'protonmail-apps'
            }
        ]
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
            <ProtonMailBetaSection />
            <ProtonMailAppsSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default AppsContainer;
