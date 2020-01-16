import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { AddressKeysSection, UserKeysSection } from 'react-components';

import Page from '../components/Page';

export const getKeysPage = () => {
    return {
        text: c('Title').t`Keys`,
        route: '/settings/keys',
        icon: 'keys',
        sections: [
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

const KeysContainer = ({ setActiveSection }) => {
    return (
        <Page config={getKeysPage()} setActiveSection={setActiveSection}>
            <AddressKeysSection />
            <UserKeysSection />
        </Page>
    );
};

KeysContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default KeysContainer;
