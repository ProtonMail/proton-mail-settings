import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import {
    Title,
    SubTitle,
    Bordered,
    Button,
    Icon,
    LearnMore,
    PrimaryButton,
    Group,
    Paragraph,
    useNotifications,
    ConfirmModal,
    useModal,
    Alert,
    useLoading
} from 'react-components';

import useFilters from './useFilters';
import FilterSortableList from '../../components/Filters/SortableList';
import ActionsFilterToolbar from '../../components/Filters/ActionsFilterToolbar';
import AddFilterModal from './AddFilterModal';

function FiltersContainer() {
    const { createNotification } = useNotifications();
    const { list, loading, toggleStatus, removeFilter } = useFilters();

    const getScrollContainer = () => document.querySelector('.main-area');
    const onSortEnd = ({ oldIndex, newIndex }) => {
        console.log('Sort end', { oldIndex, newIndex });
    };

    const handleClickEdit = (filter, type) => () => {
        console.log('handleClickEdit', filter, type);
    };

    const handleRemoveFilter = removeFilter;

    const handleChangeStatus = (filter) => async (value) => {
        await toggleStatus(filter, value);
        createNotification({
            text: c('Success notification').t`Status updated`
        });
    };

    return (
        <>
            <SubTitle>{c('FilterSettings').t('Custom Filters')}</SubTitle>
            <p className="block-info-standard mt1 mb1">
                {c('FilterSettings').t(
                    'Add a custom filter to perform actions suche as automatically labeling or archiving messages.'
                )}
                <br />
                <LearnMore url="https://protonmail.com" />
            </p>

            <Group>
                <ActionsFilterToolbar />
            </Group>

            {loading ? <div className="square-color bordered-container center w100" aria-busy="true" /> : null}

            {!loading && list.length ? (
                <FilterSortableList
                    getContainer={getScrollContainer}
                    pressDelay={200}
                    items={list}
                    onClickEdit={handleClickEdit}
                    onRemoveFilter={handleRemoveFilter}
                    onChangeStatus={handleChangeStatus}
                    onSortEnd={onSortEnd}
                />
            ) : (
                <Paragraph>No filers available</Paragraph>
            )}
        </>
    );
}

export default FiltersContainer;
