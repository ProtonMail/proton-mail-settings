import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import StartDayOfWeekField from '../fields/StartDayOfWeekField';
import EndDayOfWeekField from '../fields/EndDayOfWeekField';

export const initialModel = {
    startWeekday: 'monday',
    startTime: '00:00',
    endWeekday: 'wednesday',
    endTime: '01:00',
    timeZone: 'europe/vilnius'
};

const WeeklyDurationForm = ({ model, updateModel }) => {
    return (
        <>
            <Alert>{c('AutoReply').t`Auto-reply is active each week between the selected start and end time.`}</Alert>
            <StartDayOfWeekField value={model.startWeekday} onChange={updateModel('startWeekday')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndDayOfWeekField value={model.endWeekday} onChange={updateModel('endWeekday')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

WeeklyDurationForm.propTypes = {
    model: PropTypes.shape({
        startWeekday: PropTypes.string,
        startTime: PropTypes.string,
        endWeekday: PropTypes.string,
        endTime: PropTypes.string,
        timeZone: PropTypes.string
    }).isRequired,
    updateModel: PropTypes.func.isRequired
};

export default WeeklyDurationForm;
