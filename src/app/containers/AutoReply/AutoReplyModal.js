import React, { useState } from 'react';
import {
    Modal,
    ContentModal,
    FooterModal,
    Row,
    Label,
    Field,
    Select,
    Alert,
    RichTextEditor,
    Button,
    PrimaryButton,
    DateInput
} from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import TimeInput from './inputs/TimeInput';
import MonthDayInput from './inputs/MonthDayInput';
import WeekDayCheckboxGroup from './inputs/WeekDaysCheckboxGroup';
import WeekDayInput from './inputs/WeekDayInput';
import TimeZoneInput from './inputs/TimeZoneInput';
import DurationInput from './inputs/DurationInput';

const durations = {
    fixed: 'fixed',
    daily: 'daily',
    weekly: 'weekly',
    monthly: 'monthly',
    permanent: 'permanent'
};

const alerts = {
    [durations.fixed]: c('AutoReply').t`Auto-reply is active from the start time to the end time`,
    [durations.daily]: c('AutoReply')
        .t`Auto-reply is always active on the days of the week you select, between the selected hours.`,
    [durations.weekly]: c('AutoReply').t`Auto-reply is active each week between the selected start and end time.`,
    [durations.monthly]: c('AutoReply').t`Auto-reply is active each month between the selected start and end time.`,
    [durations.permanent]: c('AutoReply').t`Auto-reply is active until you turn it off.`
};

const AutoReplyModal = ({ show, onClose }) => {
    const [duration, setDuration] = useState(durations.fixed);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [weekdays, setWeekdays] = useState({});
    const [startWeekday, setStartWeekday] = useState('monday');
    const [endWeekday, setEndWeekday] = useState('tuesday');
    const [startDayOfMonth, setStartDayOfMonth] = useState(1);
    const [endDayOfMonth, setEndDayOfMonth] = useState(2);
    const [message, setMessage] = useState(
        'I am out of office with limited access to my email.<br /><br/>Sent using <a href="https://protonmail.com/">ProtonMail</a> Secure Email.'
    );

    const handleChangeStartTime = (value) => console.log(value);
    const handleChangeEndTime = (value) => console.log(value);
    const handleChangeTimezone = (value) => console.log(value);
    const handleChangeMessage = (value) => setMessage(value);

    return (
        <Modal title={c('Title').t`Create auto-reply`} show={show} onClose={onClose}>
            <ContentModal>
                <Row className="flex-spacebetween">
                    <Label htmlFor="duration">{c('Label').t`Duration`}</Label>
                    <Field>
                        <DurationInput id="duration" value={duration} onChange={setDuration} />
                    </Field>
                </Row>

                <Alert>{alerts[duration]}</Alert>

                {duration === durations.fixed && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="startDate">{c('Label').t`Start date`}</Label>
                        <Field>
                            <DateInput
                                id="startDate"
                                className="w100"
                                defaultDate={startDate}
                                onSelect={setStartDate}
                                format="DD MM YYYY"
                            />
                        </Field>
                    </Row>
                )}

                {duration === durations.daily && (
                    <Row className="flex-spacebetween">
                        <Label>{c('Label').t`Days of the week`}</Label>
                        <Field>
                            <WeekDayCheckboxGroup weekdaysChecked={weekdays} onChange={setWeekdays} />
                        </Field>
                    </Row>
                )}

                {duration === durations.monthly && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="startDayOfMonth">{c('Label').t`Start day of month`}</Label>
                        <Field>
                            <MonthDayInput id="startDayOfMonth" value={startDayOfMonth} onChange={setStartDayOfMonth} />
                        </Field>
                    </Row>
                )}

                {duration === durations.weekly && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="startWeekday">{c('Label').t`Start weekday`}</Label>
                        <Field>
                            <WeekDayInput id="startWeekday" value={startWeekday} onChange={setEndWeekday} />
                        </Field>
                    </Row>
                )}

                {duration !== durations.permanent && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="startTime">{c('Label').t`Start time`}</Label>
                        <Field>
                            <TimeInput id="startTime" onChange={handleChangeStartTime} />
                        </Field>
                    </Row>
                )}

                {duration === duration.fixed && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="endDate">{c('Label').t`End date`}</Label>
                        <Field>
                            <DateInput
                                id="endDate"
                                className="w100"
                                defaultDate={endDate}
                                onSelect={setEndDate}
                                format="DD MM YYYY"
                            />
                        </Field>
                    </Row>
                )}

                {duration === durations.monthly && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="endDayOfMonth">{c('Label').t`End day of month`}</Label>
                        <Field>
                            <MonthDayInput id="endDayOfMonth" value={endDayOfMonth} onChange={setEndDayOfMonth} />
                        </Field>
                    </Row>
                )}

                {duration === durations.weekly && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="endWeekday">{c('Label').t`End weekday`}</Label>
                        <Field>
                            <WeekDayInput id="endWeekday" value={endWeekday} onChange={setStartWeekday} />
                        </Field>
                    </Row>
                )}

                {duration !== durations.permanent && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="endTime">{c('Label').t`End time`}</Label>
                        <Field>
                            <TimeInput id="endTime" onChange={handleChangeEndTime} />
                        </Field>
                    </Row>
                )}

                {duration !== durations.permanent && (
                    <Row className="flex-spacebetween">
                        <Label htmlFor="timezone">{c('Label').t`Timezone`}</Label>
                        <Field>
                            <TimeZoneInput id="timezone" onChange={handleChangeTimezone} />
                        </Field>
                    </Row>
                )}

                <RichTextEditor value={message} onChange={handleChangeMessage} />

                <FooterModal>
                    <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                    <PrimaryButton>{c('Action').t`Create`}</PrimaryButton>
                </FooterModal>
            </ContentModal>
        </Modal>
    );
};

AutoReplyModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AutoReplyModal;
