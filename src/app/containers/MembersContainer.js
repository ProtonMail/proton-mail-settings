import React from 'react';
import PropTypes from 'prop-types';
import { MembersSection, RelatedSettingsSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { ADMIN } = PERMISSIONS;

export const getMembersPage = () => {
    return {
        text: c('Title').t`Users`,
        route: '/settings/members',
        icon: 'contacts-group-people',
        permissions: [ADMIN],
        sections: [
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

const MembersContainer = ({ setActiveSection }) => {
    return (
        <Page config={getMembersPage()} setActiveSection={setActiveSection}>
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
        </Page>
    );
};

MembersSection.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default MembersContainer;
