import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Button, ConfirmModal, Alert, useApiWithoutResult, useModal, useNotifications } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import AddFilterModal from '../../containers/Filters/AddFilterModal';

function EditFilterButton({ filter, mode, className, onEditFilter, textContent }) {
    const { createNotification } = useNotifications();
    // const { request, loading } = useApiWithoutResult(deleteFilter);
    const { isOpen: isOpenModal, open: openModal, close: closeModal } = useModal();

    const handelClick = openModal;
    const handleCloseModal = closeModal;

    const handleSubmitModal = async () => {
        closeConfirmModal();
        createNotification({
            text: c('Filter notification').t('Filter removed')
        });
        onEditFilter(filter);
    };

    return (
        <>
            <Button className={className} onClick={handelClick}>
                {textContent}
            </Button>
            <AddFilterModal
                show={isOpenModal}
                filter={filter}
                type={mode}
                onClose={handleCloseModal}
                onSubmit={handleSubmitModal}
            />
        </>
    );
}

EditFilterButton.propTypes = {
    filter: PropTypes.object.isRequired,
    className: PropTypes.string,
    onEditFilter: PropTypes.func
};

EditFilterButton.defaultProps = {
    onEditFilter: noop
};

export default EditFilterButton;
