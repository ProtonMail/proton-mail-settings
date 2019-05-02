import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import WeekDayInput from '../inputs/WeekDaySelect';

const StartDayOfWeekField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="startDayOfWeek">{c('Label').t`Start weekday`}</Label>
            <Field>
                <WeekDayInput id="startDayOfWeek" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

StartDayOfWeekField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default StartDayOfWeekField;
