import React from 'react';
import { IdentitySection, PmMeSection, SettingsPropsShared } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { UPGRADER } = PERMISSIONS;

export const getIdentityPage = () => {
    return {
        text: c('Title').t`Identity`,
        to: '/identity',
        icon: 'identity',
        subsections: [
            {
                text: c('Title').t`Display name & signature`,
                id: 'name-signature'
            },
            {
                text: c('Title').t`Short domain (@pm.me)`,
                id: 'pmme',
                permissions: [UPGRADER]
            }
        ]
    };
};

const IdentityContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getIdentityPage()}
            setActiveSection={setActiveSection}
        >
            <IdentitySection />
            <PmMeSection />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default IdentityContainer;
