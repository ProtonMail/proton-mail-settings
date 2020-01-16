import React from 'react';
import PropTypes from 'prop-types';
import { IdentitySection, PmMeSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { PAID_MAIL } = PERMISSIONS;

export const getIdentityPage = () => {
    return {
        text: c('Title').t`Identity`,
        route: '/settings/identity',
        icon: 'identity',
        sections: [
            {
                text: c('Title').t`Display name & signature`,
                id: 'name-signature'
            },
            {
                text: c('Title').t`Short domain (@pm.me)`,
                id: 'pmme',
                permissions: [PAID_MAIL]
            }
        ]
    };
};

const IdentityContainer = ({ setActiveSection }) => {
    return (
        <Page config={getIdentityPage()} setActiveSection={setActiveSection}>
            <IdentitySection />
            <PmMeSection />
        </Page>
    );
};

IdentityContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default IdentityContainer;
