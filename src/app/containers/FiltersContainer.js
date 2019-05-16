import React from 'react';
import { c } from 'ttag';
<<<<<<< HEAD

import Page from '../components/Page';
import FilterContainer from './Filters/Container';
import SpamContainer from './Filters/SpamContainer';
=======
import { Title, FilterContainer, SpamContainer } from 'react-components';
>>>>>>> Move labels and filter to react-components

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
    return (<Page config={getFiltersPage()}>
        <FilterContainer />
        <SpamContainer />
    </Page>);
};

export default FiltersContainer;
