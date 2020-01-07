import React from 'react';
import PropTypes from 'prop-types';
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

const FiltersContainer = ({ setActiveSection }) => {
    return (
        <Page config={getFiltersPage()} setActiveSection={setActiveSection}>
            <FiltersSection />
            <SpamFiltersSection />
        </Page>
    );
};

FiltersContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default FiltersContainer;
