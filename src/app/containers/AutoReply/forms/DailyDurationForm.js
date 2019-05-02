import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartTimeField from '../fields/StartTimeField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import DaysOfWeekField from '../fields/DaysOfWeekField';

export const initialModel = {
    daysOfWeek: {},
    startTime: '00:00',
    endTime: '01:00',
    timeZone: 'europe/vilnius'
};

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
    model: PropTypes.shape({
        daysOfWeek: PropTypes.shape({
            monday: PropTypes.bool,
            tuesday: PropTypes.bool,
            wednesday: PropTypes.bool,
            thursday: PropTypes.bool,
            friday: PropTypes.bool,
            saturday: PropTypes.bool,
            sunday: PropTypes.bool
        }),
        startTime: PropTypes.string,
        endTime: PropTypes.string,
        timeZone: PropTypes.string
    }).isRequired,
    updateModel: PropTypes.func.isRequired
};

export default DailyDurationForm;
