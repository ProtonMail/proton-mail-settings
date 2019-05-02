import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import WeekDayInput from '../inputs/WeekDaySelect';

const EndDayOfWeekField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="endDayOfWeek">{c('Label').t`End weekday`}</Label>
            <Field>
                <WeekDayInput id="endDayOfWeek" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

EndDayOfWeekField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EndDayOfWeekField;
