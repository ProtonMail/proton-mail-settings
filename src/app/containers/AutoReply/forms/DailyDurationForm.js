import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import DaysOfWeekField from '../fields/DaysOfWeekField';

const DailyDurationForm = ({ model, updateModel }) => {
    return (
        <>
            <Alert>{c('AutoReply')
                .t`Auto-reply is always active on the days of the week you select, between the selected hours.`}</Alert>
            <DaysOfWeekField value={model.daysOfWeek} onChange={updateModel('daysOfWeek')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

DailyDurationForm.propTypes = {
    model: PropTypes.any.isRequired,
    updateModel: PropTypes.func.isRequired
};

export default DailyDurationForm;
