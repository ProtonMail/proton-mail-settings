import React from 'react';
import { c } from 'ttag';
import { Title } from 'react-components';

import FilterContainer from './Filters/Container';
import SpamContainer from './Filters/SpamContainer';

// <FilterContainer />
function FiltersContainer() {
    return (
        <>
            <Title>{c('FilterSettings').t`Filters`}</Title>
            <section id="custom" className="mb1" />
            <section id="spam">
                <SpamContainer />
            </section>
        </>
    );
}

export default FiltersContainer;
