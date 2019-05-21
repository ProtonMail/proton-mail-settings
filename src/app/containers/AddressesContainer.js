import React from 'react';
import { c } from 'ttag';
import { AddressesSection, RelatedSettingsSection } from 'react-components';

import Page from '../components/Page';

export const getAddressesPage = () => {
    return {
        text: c('Title').t`Addresses`,
        route: '/settings/addresses'
    };
};

const AddressesContainer = () => {
    const relatedSettingsList = [
        {
            icon: 'domain',
            text: c('Info')
                .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`,
            link: c('Link').t`Domain settings`,
            to: '/settings/domains'
        },
        {
            icon: 'contacts-group-people',
            text: c('Info')
                .t`Go to User Settings if you want to create and manage the list of users in your organization.`,
            link: c('Link').t`Users settings`,
            to: '/settings/members'
        }
    ];

    return (
        <Page config={getAddressesPage()}>
            <AddressesSection />
            <RelatedSettingsSection id="related-settings" list={relatedSettingsList} />
        </Page>
    );
};

export default AddressesContainer;
