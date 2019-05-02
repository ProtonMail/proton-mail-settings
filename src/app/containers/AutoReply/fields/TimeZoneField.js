import React from 'react';
import PropTypes from 'prop-types';
import { Select, Row, Label, Field } from 'react-components';
import { c } from 'ttag';

const timeZoneOptions = [
    {
        text: 'Europe/Vilnius: UTC +03:00',
        value: 'europe/vilnius'
    },
    {
        text: 'Europe/Zurich: UTC +02:00',
        value: 'europe/zurich'
    }
];

const TimeZoneField = ({ value, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="timezone">{c('Label').t`Timezone`}</Label>
            <Field>
                <Select id="timezone" options={timeZoneOptions} onChange={handleChange} value={value} />
            </Field>
        </Row>
    );
};

TimeZoneField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TimeZoneField;
