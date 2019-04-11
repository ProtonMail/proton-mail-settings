import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import { Title, SubTitle, LearnMore, useApiResult, Paragraph, useLabels, useApiWithoutResult } from 'react-components';
import { arrayMove } from 'react-sortable-hoc';
import { orderLabels } from 'proton-shared/lib/api/labels';

import LabelSortableList from '../../components/Labels/LabelSortableList';
import ActionsLabelToolbar from '../../components/Labels/ActionsLabelToolbar';

function LabelsContainer() {
    const [list, loading] = useLabels();
    const orderRequest = useApiWithoutResult(orderLabels);

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

    const getScrollContainer = () => document.querySelector('.main-area');

    return (
        <>
            <Title>{c('LabelSettings').t`Manage your labels/folders`}</Title>
            <div className="p1 center w80">
                <SubTitle>{c('LabelSettings').t('Folders and labels')}</SubTitle>
                <p className="block-info-standard mt1 mb1">
                    {c('LabelSettings').t(
                        'Multiple Labels can be applied to a single message, but a message can only be in a single Folder.'
                    )}
                    <br />
                    <LearnMore url="https://protonmail.com" />
                </p>
                <nav className="mb1f flex">
                    <ActionsLabelToolbar />
                </nav>

                {loading ? <div className="square-color bordered-container center" aria-busy="true" /> : null}

                {!loading && list.length ? (
                    <LabelSortableList
                        getContainer={getScrollContainer}
                        pressDelay={200}
                        items={list}
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
