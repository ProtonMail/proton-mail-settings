import React from 'react';
import { IdentitySection, PmMeSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { PAID_MAIL } = PERMISSIONS;

export const getIdentityPage = () => {
    return {
        text: c('Title').t`Identity`,
        route: '/settings/identity',
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

const IdentityContainer = () => {
    return (
        <Page config={getIdentityPage()}>
            <IdentitySection />
            <PmMeSection />
        </Page>
    );
};

export default IdentityContainer;
