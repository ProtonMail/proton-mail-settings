import React from 'react';
import { c } from 'ttag';

import Page from '../components/Page';

export const getKeysPage = () => {
    return {
        text: c('Title').t`Keys`,
        route: '/settings/keys',
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

const KeysContainer = () => <Page config={getKeysPage()}>KeysSection</Page>;

export default KeysContainer;
