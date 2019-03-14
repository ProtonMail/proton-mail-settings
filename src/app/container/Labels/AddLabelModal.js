import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal } from 'react-components';

import NewLabelForm from '../../component/Labels/NewLabelForm';

function AddLabelModal(props) {
    return (
        <Modal {...props}>
            <HeaderModal onClose={props.onClose}>{c('Add label/folder Modal').t`Add Label`}</HeaderModal>
            <NewLabelForm  {...props}/>
        </Modal>
    );
}

AddLabelModal.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.string,
    label: PropTypes.object,
    mode: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddLabelModal.defaultProps = {
    show: false,
    mode: 'create'
};

export default AddLabelModal;
