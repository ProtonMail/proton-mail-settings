import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Button, ConfirmModal, Alert, useApiWithoutResult, useModal, useNotifications } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import AddFilterModal from '../../containers/Filters/AddFilterModal';

function EditFilterButton({ filter, mode, className, onEditFilter, textContent }) {
    const { createNotification } = useNotifications();
    // const { request, loading } = useApiWithoutResult(deleteFilter);
    const { isOpen, open, close } = useModal();

    const handelClick = open;
    const handleCloseModal = close;

    const handleSubmitModal = async () => {
        close();
        createNotification({
            text: c('Filter notification').t(`Filter ${filter.Name} updated`)
        });
        onEditFilter(filter);
    };

    return (
        <>
            <Button className={className} onClick={handelClick}>
                {textContent}
            </Button>
            {isOpen && (
                <AddFilterModal
                    show={isOpen}
                    filter={filter}
                    type={mode}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitModal}
                />
            )}
        </>
    );
}

EditFilterButton.propTypes = {
    filter: PropTypes.object.isRequired,
    mode: PropTypes.string,
    className: PropTypes.string,
    onEditFilter: PropTypes.func
};

EditFilterButton.defaultProps = {
    onEditFilter: noop
};

export default EditFilterButton;
