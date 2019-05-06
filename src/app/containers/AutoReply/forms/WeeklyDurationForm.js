import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import StartDayOfWeekField from '../fields/StartDayOfWeekField';
import EndDayOfWeekField from '../fields/EndDayOfWeekField';

const HOUR = 60 * 60 * 1000;

const WeeklyDurationForm = ({ model, updateModel }) => {
    const startWeekday = model.startDate / HOUR;
    const endWeekday = model.endDate / HOUR;
    const handleChangeWeekday = (key) => (value) => updateModel(key)(value * HOUR);
    return (
        <>
            <Alert>{c('AutoReply').t`Auto-reply is active each week between the selected start and end time.`}</Alert>
            <StartDayOfWeekField value={startWeekday} onChange={handleChangeWeekday('startDate')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndDayOfWeekField value={endWeekday} onChange={handleChangeWeekday('endDate')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

WeeklyDurationForm.propTypes = {
    model: PropTypes.any.isRequired,
    updateModel: PropTypes.func.isRequired
};

export default WeeklyDurationForm;
