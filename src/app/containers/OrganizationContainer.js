import React from 'react';
import { OrganizationSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN } = PERMISSIONS;

export const getOrganizationPage = () => {
    return {
        text: c('Title').t`Organization`,
        route: '/settings/organization',
        icon: 'organization',
        permissions: [ADMIN],
        sections: [
            {
                text: c('Title').t`Name`,
                id: 'name'
            },
            {
                text: c('Title').t`Password & key`,
                id: 'password'
            }
        ]
    };
};

const OrganizationContainer = () => {
    return (
        <Page config={getOrganizationPage()}>
            <OrganizationSection />
        </Page>
    );
};

export default OrganizationContainer;
