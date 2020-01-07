import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { DomainsSection, RelatedSettingsSection, CatchAllSection, useOrganization } from 'react-components';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN, PAID_MAIL } = PERMISSIONS;

export const getDomainsPage = () => {
    return {
        text: c('Title').t`Custom domains`,
        icon: 'domains',
        route: '/settings/domains',
        permissions: [ADMIN, PAID_MAIL],
        sections: [
            {
                text: c('Title').t`Custom domains`,
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

const getList = ({ MaxMembers = 0 } = {}) => {
    if (MaxMembers > 1) {
        return [
            {
                icon: 'contacts-group-people',
                text: c('Info').t`Go to the User Settings if you want to create and manage users in your organization.`,
                link: c('Link').t`User settings`,
                to: '/settings/members'
            },
            {
                icon: 'addresses',
                text: c('Info')
                    .t`Go to the address settings if you want to create and manage addresses to your custom domain. `,
                link: c('Link').t`Address settings`,
                to: '/settings/addresses'
            }
        ];
    }

    return [
        {
            icon: 'contacts-group-people',
            text: c('Info')
                .t`Upgrade to a paid plan with multi-user support if you want to create and manage users in your organization.`,
            link: c('Link').t`Upgrade`,
            to: '/settings/subscription'
        },
        {
            icon: 'addresses',
            text: c('Info')
                .t`Go to the address settings if you want to create and manage addresses to your custom domain. `,
            link: c('Link').t`Address settings`,
            to: '/settings/addresses'
        }
    ];
};

const DomainsContainer = ({ setActiveSection }) => {
    const [organization] = useOrganization();
    return (
        <Page config={getDomainsPage()} setActiveSection={setActiveSection}>
            <DomainsSection />
            <CatchAllSection />
            <RelatedSettingsSection list={getList(organization)} />
        </Page>
    );
};

DomainsContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default DomainsContainer;
