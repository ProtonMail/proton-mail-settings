import React from 'react';
import PropTypes from 'prop-types';
import DurationField from '../fields/DurationField';
import { Alert, RichTextEditor } from 'react-components';
import { c } from 'ttag';
import StartDateField from '../fields/StartDateField';
import StartTimeField from '../fields/StartTimeField';
import EndDateField from '../fields/EndDateField';
import EndTimeField from '../fields/EndTimeField';
import TimeZoneField from '../fields/TimeZoneField';
import DaysOfWeekField from '../fields/DaysOfWeekField';
import StartDayOfMonthField from '../fields/StartDayOfMonthField';
import EndDayOfMonthField from '../fields/EndDayOfMonthField';
import StartDayOfWeekField from '../fields/StartDayOfWeekField';
import EndDayOfWeekField from '../fields/EndDayOfWeekField';

export const duration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

const DAY = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;

const AutoReplyForm = ({ model, updateModel }) => {
    if (model.duration === duration.FIXED) {
        return (
            <>
                <DurationField value={model.duration} onChange={updateModel('duration')} />
                <Alert>{c('AutoReply').t`Auto-reply is active from the start time to the end time`}</Alert>
                <StartDateField value={model.startDate} onChange={updateModel('startDate')} />
                <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
                <EndDateField value={model.endDate} onChange={updateModel('endDate')} />
                <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
                <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
                <RichTextEditor value={model.message} onChange={updateModel('message')} />
            </>
        );
    }

    if (model.duration === duration.DAILY) {
        return (
            <>
                <DurationField value={model.duration} onChange={updateModel('duration')} />
                <Alert>{c('AutoReply')
                    .t`Auto-reply is always active on the days of the week you select, between the selected hours.`}</Alert>
                <DaysOfWeekField value={model.daysOfWeek} onChange={updateModel('daysOfWeek')} />
                <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
                <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
                <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
                <RichTextEditor value={model.message} onChange={updateModel('message')} />
            </>
        );
    }

    if (model.duration === duration.MONTHLY) {
        const startDayOfMonth = model.startDate / DAY;
        const endDayOfMonth = model.endDate / DAY;
        const handleChangeDayOfMonth = (key) => (value) => updateModel(key)(value * DAY);

        return (
            <>
                <DurationField value={model.duration} onChange={updateModel('duration')} />
                <Alert>{c('AutoReply')
                    .t`Auto-reply is active each month between the selected start and end time.`}</Alert>
                <StartDayOfMonthField value={startDayOfMonth} onChange={handleChangeDayOfMonth('startDate')} />
                <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
                <EndDayOfMonthField value={endDayOfMonth} onChange={handleChangeDayOfMonth('endDate')} />
                <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
                <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
                <RichTextEditor value={model.message} onChange={updateModel('message')} />
            </>
        );
    }

    if (model.duration === duration.WEEKLY) {
        const startWeekday = model.startDate / HOUR;
        const endWeekday = model.endDate / HOUR;
        const handleChangeWeekday = (key) => (value) => updateModel(key)(value * HOUR);

        return (
            <>
                <DurationField value={model.duration} onChange={updateModel('duration')} />
                <Alert>{c('AutoReply')
                    .t`Auto-reply is active each week between the selected start and end time.`}</Alert>
                <StartDayOfWeekField value={startWeekday} onChange={handleChangeWeekday('startDate')} />
                <StartTimeField value={model.startTime} onChange={updateModel('startTime')} />
                <EndDayOfWeekField value={endWeekday} onChange={handleChangeWeekday('endDate')} />
                <EndTimeField value={model.endTime} onChange={updateModel('endTime')} />
                <TimeZoneField value={model.timeZone} onChange={updateModel('timeZone')} />
                <RichTextEditor value={model.message} onChange={updateModel('message')} />
            </>
        );
    }

    return <Alert>{c('AutoReply').t`Auto-reply is active until you turn it off.`}</Alert>;
};

AutoReplyForm.propTypes = {
    model: PropTypes.any,
    updateModel: PropTypes.func
};

export default AutoReplyForm;
