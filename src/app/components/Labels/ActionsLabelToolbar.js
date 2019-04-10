import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { PrimaryButton, Select, Icon, useModal, useApiWithoutResult, useNotifications } from 'react-components';
import { createLabel } from 'proton-shared/lib/api/labels';
import { noop } from 'proton-shared/lib/helpers/function';

import EditLabelModal from '../../containers/Labels/modals/Edit';

function ActionsLabelToolbar({ label, onAdd, onSort, className }) {
    const { createNotification } = useNotifications();
    const { request, loading } = useApiWithoutResult(createLabel);
    const [type, setType] = useState('');
    const { isOpen: isOpenModal, open: openModal, close: closeModal } = useModal();

    const handleClickAdd = (type) => () => {
        setType(type);
        openModal();
    };
    const handleCloseModal = closeModal;

    const handleSubmitModal = async (label = {}) => {
        const { Label } = await request(label);
        createNotification({
            text: c('label/folder notification').t`${label.Name} created`
        });
        onAdd(Label);
        closeModal();
    };

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
            <PrimaryButton onClick={handleClickAdd('folder')}>
                <Icon name="folder" style={{ fill: 'currentColor' }} className="mr0-5" />
                Add Folder
            </PrimaryButton>
            <PrimaryButton onClick={handleClickAdd('label')} className="ml1">
                <Icon name="label" style={{ fill: 'currentColor' }} className="mr0-5" />
                Add Label
            </PrimaryButton>

            <Select options={options} className="mlauto" />

            <EditLabelModal
                show={isOpenModal}
                loading={loading}
                type={type}
                onClose={handleCloseModal}
                onSubmit={handleSubmitModal}
            />
        </>
    );
}

ActionsLabelToolbar.propTypes = {
    className: PropTypes.string,
    onAdd: PropTypes.func,
    onSort: PropTypes.func
};

ActionsLabelToolbar.defaultProps = {
    onAdd: noop,
    onSort: noop
};

export default ActionsLabelToolbar;
