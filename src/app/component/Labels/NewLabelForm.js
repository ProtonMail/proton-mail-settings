import React, { createRef, useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';

import { Input, Label, Button, SubTitle, Modal, HeaderModal, FooterModal, Icon } from 'react-components';

import LabelColors from './LabelColors';


function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function NewLabelForm({ onClose, onSubmit, type, label, mode }) {

    const Exclusive = +(type === 'folder');
    const [ model, setModel ] = useState(label || {
        Name: '',
        Color: LABEL_COLORS[randomIntFromInterval(0, LABEL_COLORS.length - 1)],
        Exclusive
    });

    const handleClick = (Color) => () => {
        setModel({
            ...model,
            Exclusive,
            Color
        });
        console.log('Set color', model);
    };

    const handleChange = ({ target }) => {
        setModel({
            ...model,
            Exclusive,
            Name: target.value
        });
        console.log('Set name', model);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Model', model);
        onSubmit(model, mode);
    }
    return (
        <form onSubmit={handleSubmit}>
            <SubTitle>{c('New Label form').t('Create a new label')}</SubTitle>

            <div className="w90 center flex-item-fluid">
                <div className="flex flex-nowrap onmobile-flex-column mb1">
                    <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                    <Input
                        id="accountName"
                        type="text"
                        value={model.Name}
                        onChange={handleChange}
                        placeholder={c('New Label form').t('Name')}
                        required={true} />
                </div>
                <div className="flex flex-nowrap onmobile-flex-column mb1">
                    <Label htmlFor="accountType">{c('New Label form').t('Color')} </Label>
                    <LabelColors
                        selected={model.Color}
                        onClick={handleClick} />
                </div>
            </div>

            <FooterModal>
                <Button onClick={onClose}>{c('New Label form').t`Cancel`}</Button>
                <Button type="submit">{c('New Label form').t`Save`}</Button>
            </FooterModal>
        </form>
    );
}

NewLabelForm.propTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.string,
    label: PropTypes.object,
    mode: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

NewLabelForm.defaultProps = {
    show: false,
    mode: 'create'
};



export default NewLabelForm;
