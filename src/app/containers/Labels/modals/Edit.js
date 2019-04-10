import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal, ContentModal, Button } from 'react-components';
import { LABEL_TYPES } from 'proton-shared/lib/constants';

import NewLabelForm from '../../../components/Labels/NewLabelForm';

function EditLabelModal({ show, label, onSubmit, ...props }) {
    const [state, setState] = useState(label);
    const handleSubmit = () => onSubmit(state);
    const handleUpdate = setState;

    const I18N = {
        edition({ Name, Exclusive } = {}) {
            if (Exclusive === LABEL_TYPES.LABEL) {
                return c('Label/folder modal').t`Edit label: ${Name}`;
            }
            return c('Label/folder modal').t`Edit folder: ${Name}`;
        },
        create(label, type) {
            if (type === 'label') {
                return c('Label/folder modal').t('Create a new label');
            }
            return c('Label/folder modal').t('Create a new folder');
        }
    };

    return (
        <Modal show={show} {...props}>
            <HeaderModal onClose={props.onClose}>{I18N[props.mode](label, props.type)}</HeaderModal>
            <ContentModal onSubmit={handleSubmit} {...props}>
                <NewLabelForm {...props} label={label} onUpdate={handleUpdate} />
                <FooterModal>
                    <Button onClick={props.onClose}>{c('New Label form').t`Cancel`}</Button>
                    <Button type="submit">{c('New Label form').t`Save`}</Button>
                </FooterModal>
            </ContentModal>
        </Modal>
    );
}

EditLabelModal.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.string,
    label: PropTypes.object,
    mode: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

EditLabelModal.defaultProps = {
    show: false,
    mode: 'create'
};

export default EditLabelModal;
