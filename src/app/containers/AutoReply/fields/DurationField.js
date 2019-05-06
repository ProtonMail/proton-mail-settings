import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { Select, Label, Row, Field } from 'react-components';

export const duration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

const durationOptions = [
    {
        text: c('Option').t`Fixed duration`,
        value: duration.FIXED
    },
    {
        text: c('Option').t`Repeat daily`,
        value: duration.DAILY
    },
    {
        text: c('Option').t`Repeat weekly`,
        value: duration.WEEKLY
    },
    {
        text: c('Option').t`Repeat monthly`,
        value: duration.MONTHLY
    },
    {
        text: c('Option').t`Permanent`,
        value: duration.PERMANENT
    }
];

const DurationField = ({ value, onChange }) => {
    const handleChange = (e) => onChange(parseInt(e.target.value, 10));

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
