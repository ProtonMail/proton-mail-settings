import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { Select, Label, Row, Field } from 'react-components';

const durationOptions = [
    {
        text: c('Option').t`Fixed duration`,
        value: 'fixed'
    },
    {
        text: c('Option').t`Repeat daily`,
        value: 'daily'
    },
    {
        text: c('Option').t`Repeat weekly`,
        value: 'weekly'
    },
    {
        text: c('Option').t`Repeat monthly`,
        value: 'monthly'
    },
    {
        text: c('Option').t`Permanent`,
        value: 'permanent'
    }
];

const DurationField = ({ value, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="duration">{c('Label').t`Duration`}</Label>
            <Field>
                <Select id="duration" value={value} onChange={handleChange} options={durationOptions} />
            </Field>
        </Row>
    );
};

DurationField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DurationField;
