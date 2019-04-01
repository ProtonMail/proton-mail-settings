import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Button, ConfirmModal, Alert, useApiWithoutResult, useModal, useNotifications } from 'react-components';
import { deleteFilter } from 'proton-shared/lib/api/filters';
import { noop } from 'proton-shared/lib/helpers/function';

function RemoveFilter({ filter, className, onRemoveFilter }) {
    const { createNotification } = useNotifications();
    const { request, loading } = useApiWithoutResult(deleteFilter);
    const { isOpen: isOpenConfirmModal, open: openConfirmModal, close: closeConfirmModal } = useModal();

    const handelClick = openConfirmModal;
    const handleCloseConfirmModal = closeConfirmModal;

    const handleConfirmConfirmModal = async () => {
        await request(filter.ID);
        closeConfirmModal();
        createNotification({
            text: c('Filter notification').t('Filter removed')
        });
        onRemoveFilter(filter);
    };

    return (
        <>
            <Button className={className} onClick={handelClick}>
                {c('Action').t('Delete')}
            </Button>
            <ConfirmModal
                loading={loading}
                show={isOpenConfirmModal}
                onClose={handleCloseConfirmModal}
                onConfirm={handleConfirmConfirmModal}
                title={c('Title').t`Delete Filter`}
            >
                <Alert>{c('Info').t`Are you sure you want to delete this filter?`}</Alert>
            </ConfirmModal>
        </>
    );
}

RemoveFilter.propTypes = {
    filter: PropTypes.object.isRequired,
    className: PropTypes.string,
    onRemoveFilter: PropTypes.fun
};

RemoveFilter.defaultProps = {
    onRemoveFilter: noop
};

export default RemoveFilter;
