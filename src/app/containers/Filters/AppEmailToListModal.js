import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal, ContentModal, Button } from 'react-components';

import AddEmailToList from '../../components/Filters/spamlist/AddEmailToList';

function AddEmailToListModal({ type, ...props }) {
    const I18N = {
        blacklist: c('Title').t('Add to Blacklist'),
        whitelist: c('Title').t('Add to Whitelist')
    };

    const [email, setEmail] = useState('');
    const handleSubmit = () => props.onSubmit(email, type);
    const handleChange = setEmail;

    return (
        <Modal {...props}>
            <HeaderModal onClose={props.onClose}>{I18N[props.type]}</HeaderModal>
            <ContentModal onSubmit={handleSubmit} {...props}>
                <AddEmailToList onChange={handleChange} />
            </ContentModal>
            <FooterModal>
                <Button onClick={props.onClose}>{c('Action').t`Cancel`}</Button>
                <Button type="submit">{c('Action').t`Save`}</Button>
            </FooterModal>
        </Modal>
    );
}

AddEmailToListModal.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['blacklist', 'whitelist']).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddEmailToListModal.defaultProps = {
    show: false
};

export default AddEmailToListModal;
