import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-components';
import { c } from 'ttag';
import StartDateField from '../fields/StartDateField';
import StartTimeField from '../fields/StartTimeField';
import EndDateField from '../fields/EndDateField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';

export const initialModel = {
    startDate: new Date(),
    startTime: '00:00',
    endDate: new Date(),
    endTime: '01:00',
    timeZone: 'europe/vilnius'
};

const FixedDurationForm = ({ model, updateModel }) => {
    return (
        <>
            <Alert>{c('AutoReply').t`Auto-reply is active from the start time to the end time`}</Alert>
            <StartDateField value={model.startDate} onChange={updateModel('startDate')} />
            <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
            <EndDateField value={model.endDate} onChange={updateModel('endDate')} />
            <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
            <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
        </>
    );
};

FixedDurationForm.propTypes = {
    model: PropTypes.shape({
        startDate: PropTypes.instanceOf(Date),
        startTime: PropTypes.string,
        endDate: PropTypes.instanceOf(Date),
        endTime: PropTypes.string,
        timeZone: PropTypes.string
    }).isRequired,
    updateModel: PropTypes.func.isRequired
};

export default FixedDurationForm;
