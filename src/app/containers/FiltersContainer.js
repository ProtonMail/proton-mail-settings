import React from 'react';
import { c } from 'ttag';

import Page from '../components/Page';
import { FiltersSection, SpamFiltersSection } from 'react-components';

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
            <FiltersSection />
            <SpamFiltersSection />
        </Page>
    );
};

export default FiltersContainer;
