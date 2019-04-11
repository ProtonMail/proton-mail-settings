import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal } from 'react-components';

import AddEmailToList from '../../components/Filters/AddEmailToList';

function AddEmailToListModal(props) {
    const I18N = {
        blacklist: c('Title').t('Add to Blacklist'),
        whitelist: c('Title').t('Add to Whitelist')
    };

    return (
        <Modal {...props}>
            <HeaderModal onClose={props.onClose}>{I18N[props.type]}</HeaderModal>
            <AddEmailToList {...props} />
        </Modal>
    );
}

AddEmailToListModal.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['blackList', 'whitelist']).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddEmailToListModal.defaultProps = {
    show: false
};

export default AddEmailToListModal;
