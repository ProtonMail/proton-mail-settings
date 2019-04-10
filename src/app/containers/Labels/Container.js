import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import {
    Title,
    SubTitle,
    LearnMore,
    useApiResult,
    Paragraph,
    useApiWithoutResult,
    useNotifications
} from 'react-components';
import { arrayMove } from 'react-sortable-hoc';
import { getLabels, orderLabels, updateLabel, createLabel, deleteLabel } from 'proton-shared/lib/api/labels';

import LabelSortableList from '../../components/Labels/LabelSortableList';
import ActionsLabelToolbar from '../../components/Labels/ActionsLabelToolbar';

function LabelsContainer() {
    const { result: { Labels = [] } = {}, loading } = useApiResult(getLabels, []);
    const [list, setLabels] = useState(Labels);
    const { createNotification } = useNotifications();

    useEffect(() => {
        setLabels(Labels);
    }, [Labels]);

    const updateRequest = useApiWithoutResult(updateLabel);
    const orderRequest = useApiWithoutResult(orderLabels);
    const deleteRequest = useApiWithoutResult(deleteLabel);

    const sort = async (labels) => {
        await orderRequest.request({
            LabelIDs: labels.map(({ ID }) => ID)
        });
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const list = arrayMove(Labels, oldIndex, newIndex);
        sort(list);
        setLabels(list);
    };

    const handleToggleChange = (label) => async () => {
        const newLabel = {
            ...label,
            Notify: +!label.Notify
        };
        await updateRequest.request(label.ID, newLabel);
        createNotification({
            text: c('label/folder notification').t`${label.Name} updated`
        });
    };

    const handleAdd = (label) => {
        setLabels(list.concat(label));
    };

    const handleEditLabel = (label) => {
        setLabels(
            list.map((item) => {
                if (label.ID === item.ID) {
                    return label;
                }
                return item;
            })
        );
    };

    const handleClickDelete = ({ ID }) => async () => {
        await deleteRequest.request(ID);
        setLabels(list.filter((label) => label.ID !== ID));
    };

    const getScrollContainer = () => document.querySelector('.main-area');

    return (
        <>
            <Title>{c('LabelSettings').t`Manage your labels/folders`}</Title>
            <div className="p1 center w80">
                <SubTitle>Folders and labels</SubTitle>
                <p className="block-info-standard mt1 mb1">
                    {c('LabelSettings').t(
                        'Multiple Labels can be applied to a single message, but a message can only be in a single Folder.'
                    )}
                    <br />
                    <LearnMore url="https://protonmail.com" />
                </p>
                <nav className="mb1f flex">
                    <ActionsLabelToolbar onAdd={handleAdd} />
                </nav>

                {loading ? <div className="square-color bordered-container center" aria-busy="true" /> : null}

                {!loading && list.length ? (
                    <LabelSortableList
                        getContainer={getScrollContainer}
                        pressDelay={200}
                        items={list}
                        onEditLabel={handleEditLabel}
                        onClickDelete={handleClickDelete}
                        onToggleChange={handleToggleChange}
                        onSortEnd={onSortEnd}
                    />
                ) : (
                    <Paragraph>{c('LabelSettings').t('No labels/folders available')}</Paragraph>
                )}
            </div>
        </>
    );
}

export default LabelsContainer;
