import React from 'react';
import { c } from 'ttag';
import { AddressesSection, RelatedSettingsSection, useOrganization, SettingsPropsShared } from 'react-components';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getAddressesPage = () => {
    return {
        text: c('Title').t`Addresses`,
        to: '/addresses',
        icon: 'addresses',
        subsections: [
            {
                text: c('Title').t`Addresses`,
                id: 'addresses'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const getList = ({ MaxMembers = 0, MaxAddresses = 0 } = {}) => {
    if (MaxMembers > 1) {
        return [
            {
                icon: 'domains',
                text: c('Info')
                    .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`,
                link: c('Link').t`Domain settings`,
                to: '/domains'
            },
            {
                icon: 'contacts-group-people',
                text: c('Info')
                    .t`Go to User Settings if you want to create and manage the list of users in your organization.`,
                link: c('Link').t`User settings`,
                to: '/members'
            }
        ];
    }

    if (MaxAddresses > 1) {
        return [
            {
                icon: 'domains',
                text: c('Info')
                    .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`,
                link: c('Link').t`Domain settings`,
                to: '/domains'
            },
            {
                icon: 'contacts-group-people',
                text: c('Info')
                    .t`Upgrade to a multi-user plan if you want to create and manage the users of your organization.`,
                link: c('Link').t`Upgrade`,
                to: '/subscription'
            }
        ];
    }

    return [
        {
            icon: 'domains',
            text: c('Info').t`Upgrade to a paid plan if you want to create and manage custom domains.`,
            link: c('Link').t`Upgrade`,
            to: '/subscription'
        },
        {
            icon: 'contacts-group-people',
            text: c('Info')
                .t`Upgrade to a multi-user plan if you want to create and manage the users of your organization.`,
            link: c('Link').t`Upgrade`,
            to: '/subscription'
        }
    ];
};

const AddressesContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    const [organization] = useOrganization();
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getAddressesPage()}
            setActiveSection={setActiveSection}
        >
            <AddressesSection />
            <RelatedSettingsSection list={getList(organization)} />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default AddressesContainer;
