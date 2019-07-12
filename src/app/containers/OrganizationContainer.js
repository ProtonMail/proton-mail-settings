import React from 'react';
import { OrganizationSection, OrganizationPasswordSection, RelatedSettingsSection } from 'react-components';
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
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const OrganizationContainer = () => {
    return (
        <Page config={getOrganizationPage()}>
            <OrganizationSection />
            <OrganizationPasswordSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'domains',
                        text: c('Info')
                            .t`Go to the domains settings if you want to create and manage custom domains, including electing a catch-all email address.`,
                        link: c('Link').t`Domains settings`,
                        to: '/settings/domains'
                    },
                    {
                        icon: 'contacts-group-people',
                        text: c('Info')
                            .t`Go to the users settings if you want to create and manage the users of your organization.`,
                        link: c('Link').t`Users settings`,
                        to: '/settings/members'
                    }
                ]}
            />
        </Page>
    );
};

export default OrganizationContainer;
