import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Input, Label, Button, SubTitle, Modal, HeaderModal, FooterModal, Icon } from 'react-components';

function AddEmailToList({ onClose, onSubmit, type }) {
    const model = {};
    const handleChange = ({ target }) => {
        model.value = target.value;
        console.log('Set email', target.value);
        console.log('NEED VALIDATION');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(type, model);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w90 center flex-item-fluid">
                <div className="flex flex-nowrap onmobile-flex-column mb1">
                    <Label htmlFor="email">{c('Label').t`Email`}</Label>
                    <Input
                        id="email"
                        type="email"
                        onChange={handleChange}
                        placeholder={c('Label').t('Email address')}
                        required={true}
                    />
                </div>
            </div>

            <FooterModal>
                <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                <Button type="submit">{c('Action').t`Save`}</Button>
            </FooterModal>
        </form>
    );
}

AddEmailToList.propTypes = {
    type: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddEmailToList.defaultProps = {
    type: 'whitelist'
};

export default AddEmailToList;
