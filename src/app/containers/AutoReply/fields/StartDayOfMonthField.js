import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import MonthDaySelect from '../inputs/MonthDaySelect';

const StartDayOfMonthField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="startDayOfMonth">{c('Label').t`Start day of month`}</Label>
            <Field>
                <MonthDaySelect id="startDayOfMonth" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

StartDayOfMonthField.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default StartDayOfMonthField;
