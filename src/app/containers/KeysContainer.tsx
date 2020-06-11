import React from 'react';
import { c } from 'ttag';
import { AddressKeysSection, UserKeysSection, SettingsPropsShared } from 'react-components';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getKeysPage = () => {
    return {
        text: c('Title').t`Keys`,
        link: '/settings/keys',
        icon: 'keys',
        subsections: [
            {
                text: c('Title').t`Email encryption keys`,
                id: 'addresses'
            },
            {
                text: c('Title').t`Contact encryption keys`,
                id: 'user'
            }
        ]
    };
};

const KeysContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getKeysPage()}
            setActiveSection={setActiveSection}
        >
            <AddressKeysSection />
            <UserKeysSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default KeysContainer;
