import React from 'react';
import {
    OrganizationSection,
    OrganizationPasswordSection,
    RelatedSettingsSection,
    SettingsPropsShared
} from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { ADMIN } = PERMISSIONS;

export const getOrganizationPage = () => {
    return {
        text: c('Title').t`Organization`,
        to: '/organization',
        icon: 'organization',
        permissions: [ADMIN],
        subsections: [
            {
                text: c('Title').t`Organization`,
                id: 'organization'
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

const OrganizationContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getOrganizationPage()}
            setActiveSection={setActiveSection}
        >
            <OrganizationSection />
            <OrganizationPasswordSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'domains',
                        text: c('Info')
                            .t`Go to the domain settings if you want to create and manage custom domains, including electing a catch-all email address.`,
                        link: c('Link').t`Domain settings`,
                        to: '/domains'
                    },
                    {
                        icon: 'contacts-group-people',
                        text: c('Info')
                            .t`Go to the user settings if you want to create and manage the users of your organization.`,
                        link: c('Link').t`User settings`,
                        to: '/members'
                    }
                ]}
            />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default OrganizationContainer;
