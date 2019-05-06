import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import StartDayOfMonthField from '../fields/StartDayOfMonthField';
import EndDayOfMonthField from '../fields/EndDayOfMonthField';

const DAY = 24 * 60 * 60 * 1000;

const MonthlyDurationForm = ({ model, updateModel }) => {
    const startDayOfMonth = model.startDate / DAY;
    const endDayOfMonth = model.endDate / DAY;
    const handleChangeDayOfMonth = (key) => (value) => updateModel(key)(value * DAY);
    return (
        <>
            <Alert>{c('AutoReply').t`Auto-reply is active each month between the selected start and end time.`}</Alert>
            <StartDayOfMonthField value={startDayOfMonth} onChange={handleChangeDayOfMonth('startDate')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndDayOfMonthField value={endDayOfMonth} onChange={handleChangeDayOfMonth('endDate')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

MonthlyDurationForm.propTypes = {
    model: PropTypes.any.isRequired,
    updateModel: PropTypes.func.isRequired
};

export default MonthlyDurationForm;
