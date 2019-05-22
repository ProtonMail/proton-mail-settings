import React from 'react';
import { c } from 'ttag';

import Page from '../components/Page';
import { FilterContainer, SpamContainer } from 'react-components';

export const getFiltersPage = () => {
    return {
        text: c('Title').t`Filters`,
        route: '/settings/filters',
        icon: 'filter',
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
    return (
        <Page config={getFiltersPage()}>
            <FilterContainer />
            <SpamContainer />
        </Page>
    );
};

export default FiltersContainer;
