import React from 'react';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import { ProtonMailBridgeSection, ProtonMailBetaSection, ProtonMailAppsSection } from 'react-components';

import Page from '../components/Page';

const { PAID_MAIL } = PERMISSIONS;

export const getAppsPage = () => {
    return {
        text: c('Title').t`Apps`,
        route: '/settings/apps',
        icon: 'apps',
        sections: [
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
                text: c('Title').t`ProtonVPN Apps`,
                id: 'protonvpn-apps'
            }
        ]
    };
};

const AppsContainer = () => {
    return (
        <Page config={getAppsPage()}>
            <ProtonMailBridgeSection />
            <ProtonMailBetaSection />
            <ProtonMailAppsSection />
        </Page>
    );
};

export default AppsContainer;
