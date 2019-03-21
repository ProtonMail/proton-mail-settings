import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import { Title, SubTitle, Bordered, Select, Label, Button, Icon, LearnMore, PrimaryButton, Toggle, useApiResult, Paragraph, useApiWithoutResult } from 'react-components';
import { arrayMove } from 'react-sortable-hoc';
import { getLabels, orderLabels, updateLabel, createLabel, deleteLabel } from 'proton-shared/lib/api/labels';

import AddLabelModal from './AddLabelModal';
import LabelSortableList from '../../components/Labels/LabelSortableList';

function LabelsContainer() {

    const { result: { Labels = [] } = {}, loading } =  useApiResult(getLabels, []);
    const [modalConfig, setModalVisibility] = useState({
        show: false,
        type: '',
        label: {}
    });

    const orderRequest = useApiWithoutResult(orderLabels);
    const updateRequest = useApiWithoutResult(updateLabel);

    const sort = async (labels) => {
        const a = await orderRequest.request({
            LabelIDs: labels.map(({ ID }) => ID)
        });
        console.log(orderRequest, a, labels)
    };

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const list = arrayMove(Labels, oldIndex, newIndex);
        sort(list);
        // setLabels(list);
    };

    const handleToggleChange = (label) => async (checked) => {
        await updateRequest.request(label.ID, {
            ...label,
            Notify: +checked
        });
    };

    const handleClickAdd = (type) => () => {
        setModalVisibility({
            show: true,
            type
        });
    };

    const handleClickEdit = (label) => () => {
        setModalVisibility({
            show: true,
            label,
            mode: 'edition'
        });
    };

    const handleCloseModal = ()=> {
        console.log('CLOSE');
        setModalVisibility({ show: false });
    }

    const handleSubmitModal = async (model, mode)=> {

        if (mode === 'create') {
            const { Label } = await api(createLabel(model));
            setLabels(labels.concat(Label));
        }

        if (mode === 'edition') {
            const { Label } = await api(updateLabel(model.ID, model));
            setLabels(labels.map((item) => {
                if (model.ID === item.ID) {
                    return Label;
                }
                return item;
            }));
        }

        handleCloseModal();
    }

    const handleClickDelete = ({ ID }) => async () => {
        await api(deleteLabel(ID));
        setLabels(labels.filter((label) => label.ID !== ID));
    };

    const getScrollContainer = () => document.querySelector('.main-area');

    const options = [
        {
            value: '+Date',
            text: 'Sort by: Creation'
        },
        {
            value: 'A-Z',
            text: 'Sort by: A-Z'
        }
    ];
    return (
        <>
            <Title>{c('LabelSettings').t`Manage your labels/folders`}</Title>
            <div className="p1 center w80">

                <SubTitle>Folders and labels</SubTitle>
                <p className="block-info-standard mt1 mb1">
                    Multiple Labels can be applied to a single message, but a message can only be in a single Folder.
                    <br />
                    <LearnMore url="https://protonmail.com" />
                </p>
                <nav className="mb1f flex">
                    <PrimaryButton onClick={handleClickAdd('folder')}>
                        <Icon
                            name="folder"
                            style={{ fill: 'currentColor' }}
                            className="icon-16p mr0-5" />
                        Add Folder
                    </PrimaryButton>
                    <PrimaryButton onClick={handleClickAdd('label')}>
                        <Icon
                            name="label"
                            style={{ fill: 'currentColor' }}
                            className="icon-16p mr0-5" />
                        Add Label
                    </PrimaryButton>

                    <Select options={options} className="mlauto"></Select>
                </nav>

                {
                    loading ? <div aria-busy="true"></div> : null
                }

                {
                    (!loading && Labels.length) ? <LabelSortableList
                        getContainer={getScrollContainer}
                        pressDelay={200}
                        items={Labels}
                        onClickEdit={handleClickEdit}
                        onClickDelete={handleClickDelete}
                        onToggleChange={handleToggleChange}
                        onSortEnd={onSortEnd} /> : <Paragraph>No labels/folders available</Paragraph>
                }

                <AddLabelModal {...modalConfig} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
            </div>
        </>
    );
};

export default LabelsContainer;
