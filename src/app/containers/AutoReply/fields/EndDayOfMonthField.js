import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import MonthDaySelect from '../inputs/MonthDaySelect';

const EndDayOfMonthField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="endDayOfMonth">{c('Label').t`End day of month`}</Label>
            <Field>
                <MonthDaySelect id="endDayOfMonth" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

EndDayOfMonthField.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EndDayOfMonthField;
