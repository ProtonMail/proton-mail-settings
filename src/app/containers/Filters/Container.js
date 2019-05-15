import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import {
    Title,
    SubTitle,
    Bordered,
    Button,
    Icon,
    PrimaryButton,
    Group,
    Paragraph,
    useNotifications,
    ConfirmModal,
    useModal,
    Alert,
    Loader,
    useFilters,
    useEventManager
} from 'react-components';
import { toggleEnable, deleteFilter } from 'proton-shared/lib/api/filters';

import FilterSortableList from '../../components/Filters/SortableList';
import ActionsFilterToolbar from '../../components/Filters/ActionsFilterToolbar';
import AddFilterModal from './AddFilterModal';

function FiltersContainer() {
    const [list, loading] = useFilters();

    const getScrollContainer = () => document.querySelector('.main-area');
    const onSortEnd = ({ oldIndex, newIndex }) => {
        console.log('Sort end', { oldIndex, newIndex });
    };

    return (
        <>
            <SubTitle>{c('FilterSettings').t('Custom Filters')}</SubTitle>
            <Alert learnMore="https://protonmail.com" type="info">
                {c('FilterSettings').t(
                    'Add a custom filter to perform actions suche as automatically labeling or archiving messages.'
                )}
            </Alert>

            <Group>
                <ActionsFilterToolbar />
            </Group>

            {loading ? <Loader /> : null}

            {!loading && list.length ? (
                <FilterSortableList
                    getContainer={getScrollContainer}
                    pressDelay={200}
                    items={list}
                    onSortEnd={onSortEnd}
                />
            ) : (
                <Paragraph>No filers available</Paragraph>
            )}
        </>
    );
}

export default FiltersContainer;
