import React from 'react';
import { c } from 'ttag';
import {
    DomainsSection,
    RelatedSettingsSection,
    CatchAllSection,
    useOrganization,
    SettingsPropsShared
} from 'react-components';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { ADMIN, PAID_MAIL } = PERMISSIONS;

export const getDomainsPage = () => {
    return {
        text: c('Title').t`Custom domains`,
        icon: 'domains',
        to: '/domains',
        permissions: [ADMIN, PAID_MAIL],
        subsections: [
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
                to: '/members'
            },
            {
                icon: 'addresses',
                text: c('Info')
                    .t`Go to the address settings if you want to create and manage addresses to your custom domain. `,
                link: c('Link').t`Address settings`,
                to: '/addresses'
            }
        ];
    }

    return [
        {
            icon: 'contacts-group-people',
            text: c('Info')
                .t`Upgrade to a paid plan with multi-user support if you want to create and manage users in your organization.`,
            link: c('Link').t`Upgrade`,
            to: '/subscription'
        },
        {
            icon: 'addresses',
            text: c('Info')
                .t`Go to the address settings if you want to create and manage addresses to your custom domain. `,
            link: c('Link').t`Address settings`,
            to: '/addresses'
        }
    ];
};
const DomainsContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    const [organization] = useOrganization();
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getDomainsPage()}
            setActiveSection={setActiveSection}
        >
            <DomainsSection />
            <CatchAllSection />
            <RelatedSettingsSection list={getList(organization)} />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default DomainsContainer;
