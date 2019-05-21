import React from 'react';
import { MembersSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN, MULTI_USERS } = PERMISSIONS;

export const getMembersPage = () => {
    return {
        text: c('Title').t`Users`,
        route: '/settings/members',
        icon: 'contacts-group-people',
        permissions: [ADMIN, MULTI_USERS]
    };
};

const MembersContainer = () => {
    return (
        <Page config={getMembersPage()}>
            <MembersSection />
        </Page>
    );
};

export default MembersContainer;
