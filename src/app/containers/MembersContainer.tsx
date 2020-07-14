import React from 'react';
import { MembersSection, RelatedSettingsSection, SettingsPropsShared } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { ADMIN } = PERMISSIONS;

export const getMembersPage = () => {
    return {
        text: c('Title').t`Users`,
        to: '/settings/members',
        icon: 'contacts-group-people',
        permissions: [ADMIN],
        subsections: [
            {
                text: c('Title').t`Users`,
                id: 'members'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const MembersContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getMembersPage()}
            setActiveSection={setActiveSection}
        >
            <MembersSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'addresses',
                        text: c('Info')
                            .t`Go to the address settings if you want to create and manage addresses for your users.`,
                        link: c('Link').t`Address settings`,
                        to: '/settings/addresses'
                    }
                ]}
            />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default MembersContainer;
