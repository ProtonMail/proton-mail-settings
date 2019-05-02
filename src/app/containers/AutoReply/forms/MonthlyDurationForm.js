import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import StartDayOfMonthField from '../fields/StartDayOfMonthField';
import EndDayOfMonthField from '../fields/EndDayOfMonthField';

export const initialModel = {
    startDayOfMonth: 1,
    startTime: '00:00',
    endDayOfMonth: 3,
    endTime: '01:00',
    timeZone: 'europe/vilnius'
};

const MonthlyDurationForm = ({ model, updateModel }) => {
    return (
        <>
            <Alert>{c('AutoReply').t`Auto-reply is active each month between the selected start and end time.`}</Alert>
            <StartDayOfMonthField value={model.startDayOfMonth} onChange={updateModel('startDayOfMonth')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndDayOfMonthField value={model.endDayOfMonth} onChange={updateModel('endDayOfMonth')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

MonthlyDurationForm.propTypes = {
    model: PropTypes.shape({
        startDayOfMonth: PropTypes.number,
        startTime: PropTypes.string,
        endDayOfMonth: PropTypes.number,
        endTime: PropTypes.string,
        timeZone: PropTypes.string
    }).isRequired,
    updateModel: PropTypes.func.isRequired
};

export default MonthlyDurationForm;
