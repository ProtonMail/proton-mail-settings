import React from 'react';
import { c } from 'ttag';

import Page from '../components/Page';

export const getFiltersPage = () => {
    return {
        text: c('Title').t`Filters`,
        route: '/settings/filters',
        sections: [
            {
                text: c('Title').t`Custom filters`,
                id: 'custom'
            },
            {
                text: c('Title').t`Spam filters`,
                id: 'spam'
            }
        ]
    };
};

const FiltersContainer = () => {
    return <Page config={getFiltersPage()} />;
};

export default FiltersContainer;
