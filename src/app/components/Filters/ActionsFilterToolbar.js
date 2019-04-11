import React, { useState } from 'react';
import { c } from 'ttag';
import { Button, PrimaryButton, useModal } from 'react-components';
import AddFilterModal from '../../containers/Filters/AddFilterModal';

function ActionsFilterToolbar() {
    const { isOpen: isOpenModal, open: openModal, close: closeModal } = useModal();
    const [type, setType] = useState('');

    const handleCloseModal = () => {
        console.log('handleCloseModal');
        closeModal();
    };
    const handleSubmitModal = () => {
        console.log('handleSubmitModal');
        openModal();
    };

    const handleClickAdd = (type = '') => () => {
        setType(type);
        openModal();
    };

    return (
        <>
            <PrimaryButton onClick={handleClickAdd()}>{c('Action').t('Add Filter')}</PrimaryButton>
            <Button onClick={handleClickAdd('sieve')} className="ml1">
                {c('Action').t('Add Sieve Filter')}
            </Button>
            <AddFilterModal show={isOpenModal} type={type} onClose={handleCloseModal} onSubmit={handleSubmitModal} />
        </>
    );
}

export default ActionsFilterToolbar;
