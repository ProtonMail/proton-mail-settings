import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Input, Label, Icon } from 'react-components';
import { LABEL_COLORS } from 'proton-shared/lib/constants';

import LabelColors from './LabelColors';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function NewLabelForm({ onSubmit, type, label, onUpdate }) {
    const Exclusive = +(type === 'folder');
    const [model, setModel] = useState(
        label || {
            Name: '',
            Color: LABEL_COLORS[randomIntFromInterval(0, LABEL_COLORS.length - 1)],
            Exclusive
        }
    );

    useEffect(() => {
        onUpdate(model);
    }, [model]);

    const handleClick = (Color) => () => {
        setModel({
            ...model,
            Exclusive,
            Color
        });
    };

    const handleChange = ({ target }) => {
        setModel({
            ...model,
            Exclusive,
            Name: target.value
        });
    };

    return (
        <div className="w90 center flex-item-fluid">
            <div className="flex flex-nowrap onmobile-flex-column mb1">
                <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                <Input
                    id="accountName"
                    type="text"
                    value={model.Name}
                    onChange={handleChange}
                    placeholder={c('New Label form').t('Name')}
                    required={true}
                />
            </div>
            <div className="flex flex-nowrap onmobile-flex-column mb1">
                <Label htmlFor="accountType">{c('New Label form').t('Color')} </Label>
                <LabelColors selected={model.Color} onClick={handleClick} />
            </div>
        </div>
    );
}

NewLabelForm.propTypes = {
    type: PropTypes.string,
    label: PropTypes.object,
    onUpdate: PropTypes.func.isRequired
};

export default NewLabelForm;
