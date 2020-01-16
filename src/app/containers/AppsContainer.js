import React from 'react';
import PropTypes from 'prop-types';
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
                text: c('Title').t`ProtonMail apps`,
                id: 'protonmail-apps'
            }
        ]
    };
};

const AppsContainer = ({ setActiveSection }) => {
    return (
        <Page config={getAppsPage()} setActiveSection={setActiveSection}>
            <ProtonMailBridgeSection />
            <ProtonMailBetaSection />
            <ProtonMailAppsSection />
        </Page>
    );
};

AppsContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default AppsContainer;
