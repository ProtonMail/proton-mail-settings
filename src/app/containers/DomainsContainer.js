import React from 'react';
import { c } from 'ttag';
import { DomainsSection, RelatedSettingsSection, CatchAllSection } from 'react-components';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN, PAID_MAIL } = PERMISSIONS;

export const getDomainsPage = () => {
    return {
        text: c('Title').t`Custom domain`,
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
            }
        ]
    };
};

const DomainsContainer = () => {
    const relatedSettingsList = [
        {
            icon: 'alias',
            text: c('Info').t`TODO`,
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
    ];
    return (
        <Page config={getDomainsPage()}>
            <DomainsSection id="domains" />
            <CatchAllSection id="catch-all" />
            <RelatedSettingsSection id="related-settings" list={relatedSettingsList} />
        </Page>
    );
};

export default DomainsContainer;
