import React from 'react';
import PropTypes from 'prop-types';
import DurationField from '../fields/DurationField';
import FixedDurationForm from './FixedDurationForm';
import DailyDurationForm from './DailyDurationForm';
import WeeklyDurationForm from './WeeklyDurationForm';
import MonthlyDurationForm from './MonthlyDurationForm';
import { Alert, RichTextEditor } from 'react-components';
import { c } from 'ttag';

export const duration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

const forms = {
    [duration.FIXED]: FixedDurationForm,
    [duration.DAILY]: DailyDurationForm,
    [duration.WEEKLY]: WeeklyDurationForm,
    [duration.MONTHLY]: MonthlyDurationForm,
    [duration.PERMANENT]: () => <Alert>{c('AutoReply').t`Auto-reply is active until you turn it off.`}</Alert>
};

const AutoReplyForm = ({ model, updateModel }) => {
    const AutoReplyFields = forms[model.duration];

    return (
        <>
            <DurationField value={model.duration} onChange={updateModel('duration')} />

            <AutoReplyFields model={model} updateModel={updateModel} />

            <RichTextEditor value={model.message} onChange={updateModel('message')} />
        </>
    );
};

AutoReplyForm.propTypes = {
    model: PropTypes.any,
    updateModel: PropTypes.func
};

export default AutoReplyForm;
