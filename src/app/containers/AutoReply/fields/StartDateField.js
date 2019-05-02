import React from 'react';
import PropTypes from 'prop-types';
import { Row, Label, DateInput, Field } from 'react-components';
import { c } from 'ttag';

const StartDateField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="startDate">{c('Label').t`Start date`}</Label>
            <Field>
                <DateInput
                    id="startDate"
                    className="w100"
                    defaultDate={value}
                    onSelect={onChange}
                    format="DD MM YYYY"
                />
            </Field>
        </Row>
    );
};

StartDateField.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
};

export default StartDateField;
