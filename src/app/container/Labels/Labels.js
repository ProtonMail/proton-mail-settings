import React, { useState, useEffect, useContext } from 'react';
import { c } from 'ttag';
import { Title, SubTitle, Bordered, Select, Label, Button, Icon, LearnMore, PrimaryButton, Toggle, useApiResult } from 'react-components';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import { getLabels, orderLabels, updateLabel, createLabel, deleteLabel } from 'proton-shared/lib/api/labels';
import { debounce } from 'proton-shared/lib/helpers/function';

import AddLabelModal from './AddLabelModal';

const LabelsContainer = () => {
    const [labels, setLabels] = useState([]);
    const [modalConfig, setModalVisibility] = useState({
        show: false,
        type: '',
        label: {}
    });
    const { result = {}, loading, request } =  useApiResult(getLabels);
    // const { result, run } =  useAsync();
    console.log('INIT', {result, loading, request})

    const fetch = async () => {
        request()
        console.log('FETCH', result, request);
        // setLabels(Labels);
    };

    const sort = async (labels) => {
        await api(orderLabels({
            LabelIDs: labels.map(({ ID }) => ID)
        }));
    };

    useEffect(() => {
        fetch();
    }, []);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const list = arrayMove(labels, oldIndex, newIndex);
        sort(list);
        setLabels(list);
    };

    const handleChange = (label) => async (checked) => {
        await api(updateLabel(label.ID, {
            ...label,
            Notify: +checked
        }));
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

    const SortableItem = SortableElement((label) => {
        const { ID, Name, Color, Exclusive, Notify } = label;

        return (<tr
            style={{ backgroundColor: 'white', cursor: 'move' }}>
            <td><Icon name="text-justify" /></td>
            <td>
                { Exclusive === 1 && <Icon
                    name="folder"
                    style={{ fill: Color }}
                    className="icon-16p mr1"
                    alt={Name} /> }
                { Exclusive === 0 && <Icon
                    name="label"
                    style={{ fill: Color }}
                    className="icon-16p mr1"
                    alt={Name} /> }
                { Name }
            </td>
            <td>
                <div className="w10">
                    { Exclusive === 1 && <Toggle
                        id={`item-${ID}`}
                        type="icon"
                        checked={Notify === 1}
                        onChange={debounce(handleChange(label), 300)}/>
                    }
                </div>
            </td>
            <td>
                <Button onClick={handleClickEdit(label)}>Edit</Button>
                <Button onClick={handleClickDelete(label)}>Delete</Button>
            </td>
        </tr>)
    });

    const SortableList = SortableContainer(({ items }) => {
      return (
        <table className="pm-simple-table noborder border-collapse mt1">
            <caption className="sr-only">Labels/Folders</caption>
            <thead>
                <tr>
                    <th scope="col" className="w5">
                        <Icon name="what-is-this" />
                    </th>
                    <th scope="col" className="w45">Name</th>
                    <th scope="col" className="w15">Notification</th>
                    <th scope="col" className="w30">Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((value, index) => (
                  <SortableItem key={`item-${index}`} index={index} {...value} />
                ))}
            </tbody>
        </table>
      );
    });


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
                <SortableList
                    getContainer={getScrollContainer}
                    pressDelay={200}
                    items={labels}
                    onSortEnd={onSortEnd} />

                <AddLabelModal {...modalConfig} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
            </div>
        </>
    );
};

export default LabelsContainer;
