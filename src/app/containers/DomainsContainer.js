import React from 'react';
import { c } from 'ttag';
import { DomainsSection, RelatedSettingsSection, CatchAllSection } from 'react-components';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN, PAID_MAIL } = PERMISSIONS;

export const getDomainsPage = () => {
    return {
        text: c('Title').t`Custom domain`,
        icon: 'domains',
        route: '/settings/domains',
        permissions: [ADMIN, PAID_MAIL],
        sections: [
            {
                text: c('Title').t`Custom domain`,
                id: 'domains'
            },
            {
                text: c('Title').t`Catch-all`,
                id: 'catch-all'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const DomainsContainer = () => {
    return (
        <Page config={getDomainsPage()}>
            <DomainsSection />
            <CatchAllSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'dashboard',
                        text: c('Info')
                            .t`Upgrade to a paid plan with multi-user support if you want to create and manage users in your organization`,
                        link: c('Link').t`Upgrade`,
                        to: '/settings/subscription'
                    },
                    {
                        icon: 'email-address',
                        text: c('Info')
                            .t`Go to the Addresses settings if you want to create and manage addresses to your custom domain. `,
                        link: c('Link').t`Addresses settings`,
                        to: '/settings/addresses'
                    }
                ]}
            />
        </Page>
    );
};

export default DomainsContainer;
