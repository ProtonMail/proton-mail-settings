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
    DateInput,
    Checkbox
} from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';

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

const durationOptions = [
    {
        text: c('Option').t`Fixed duration`,
        value: 'fixed'
    },
    {
        text: c('Option').t`Repeat daily`,
        value: 'daily'
    },
    {
        text: c('Option').t`Repeat weekly`,
        value: 'weekly'
    },
    {
        text: c('Option').t`Repeat monthly`,
        value: 'monthly'
    },
    {
        text: c('Option').t`Permanent`,
        value: 'permanent'
    }
];

const weekdaysOptions = {
    monday: c('Option').t`Monday`,
    tuesday: c('Option').t`Tuesday`,
    wednesday: c('Option').t`Wednesday`,
    thursday: c('Option').t`Thursday`,
    friday: c('Option').t`Friday`,
    saturday: c('Option').t`Saturday`,
    sunday: c('Option').t`Sunday`
};

const daysOfMonth = [
    { text: c('Option').t`1st of the month`, value: '' },
    { text: c('Option').t`2nd of the month`, value: 2 },
    { text: c('Option').t`3rd of the month`, value: 3 },
    { text: c('Option').t`4th of the month`, value: 4 },
    { text: c('Option').t`5th of the month`, value: 5 },
    { text: c('Option').t`6th of the month`, value: 6 },
    { text: c('Option').t`7th of the month`, value: 7 },
    { text: c('Option').t`8th of the month`, value: 8 },
    { text: c('Option').t`9th of the month`, value: 9 },
    { text: c('Option').t`10th of the month`, value: 10 },
    { text: c('Option').t`11th of the month`, value: 11 },
    { text: c('Option').t`12th of the month`, value: 12 },
    { text: c('Option').t`13th of the month`, value: 13 },
    { text: c('Option').t`14th of the month`, value: 14 },
    { text: c('Option').t`15th of the month`, value: 15 },
    { text: c('Option').t`16th of the month`, value: 16 },
    { text: c('Option').t`17th of the month`, value: 17 },
    { text: c('Option').t`18th of the month`, value: 18 },
    { text: c('Option').t`19th of the month`, value: 19 },
    { text: c('Option').t`20th of the month`, value: 20 },
    { text: c('Option').t`21st of the month`, value: 21 },
    { text: c('Option').t`22nd of the month`, value: 22 },
    { text: c('Option').t`23rd of the month`, value: 23 },
    { text: c('Option').t`24th of the month`, value: 24 },
    { text: c('Option').t`25th of the month`, value: 25 },
    { text: c('Option').t`26th of the month`, value: 26 },
    { text: c('Option').t`27th of the month`, value: 27 },
    { text: c('Option').t`28th of the month`, value: 28 },
    { text: c('Option').t`29th of the month`, value: 29 },
    { text: c('Option').t`30th of the month`, value: 30 },
    { text: c('Option').t`31st of the month`, value: 31 }
];

const AutoReplyModal = ({ show, onClose }) => {
    const [duration, setDuration] = useState(durations.daily);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [weekdays, setWeekdays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    });
    const [weekday, setWeekday] = useState('monday');
    const [startDayOfMonth, setStartDayOfMonth] = useState(1);
    const [message, setMessage] = useState(
        'I am out of office with limited access to my email.<br /><br/>Sent using <a href="https://protonmail.com/">ProtonMail</a> Secure Email.'
    );

    const handleChangeStartTime = (e) => console.log(e.target.value);
    const handleChangeEndTime = (e) => console.log(e.target.value);
    const handleChangeTimezone = (e) => console.log(e.target.value);

    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleChangeMessage = (message) => {
        setMessage(message);
    };

    const handleWeekdayChange = (weekday) => () => {
        setWeekdays({ ...weekdays, [weekday]: !weekdays[weekday] });
    };

    const handleWeekdaySelected = (e) => {
        setWeekday(e.target.value);
    };

    const handleStartDayOfMonthSelected = (e) => {
        setStartDayOfMonth(e.target.value);
    };

    return (
        <Modal title={c('Title').t`Create auto-reply`} show={show} onClose={onClose}>
            <ContentModal>
                <Row className="flex-spacebetween">
                    <Label htmlFor="duration">{c('Label').t`Duration`}</Label>
                    <Field>
                        <Select id="duration" onChange={handleChangeDuration} options={durationOptions} />
                    </Field>
                </Row>

                <Alert>{alerts[duration]}</Alert>

                {duration === durations.daily && (
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
                            <div className="flex flex-column">
                                {Object.keys(weekdays).map((key) => (
                                    <Label htmlFor={`weekday-${key}`} key={key}>
                                        <Checkbox
                                            id={`weekday-${key}`}
                                            checked={weekdays[key]}
                                            onChange={handleWeekdayChange(key)}
                                        />
                                        {weekdaysOptions[key]}
                                    </Label>
                                ))}
                            </div>
                        </Field>
                    </Row>
                )}

                <Row className="flex-spacebetween">
                    <Label htmlFor="startDayOfMonth">{c('Label').t`Start day of month`}</Label>
                    <Field>
                        <Select
                            id="startDayOfMonth"
                            selected={startDayOfMonth}
                            options={daysOfMonth}
                            onChange={handleStartDayOfMonthSelected}
                        />
                    </Field>
                </Row>

                <Row className="flex-spacebetween">
                    <Label htmlFor="startWeekday">{c('Label').t`Start weekday`}</Label>
                    <Field>
                        <Select
                            id="startWeekday"
                            selected={weekday}
                            options={Object.keys(weekdays).map((value) => ({
                                text: weekdaysOptions[value],
                                value
                            }))}
                            onChange={handleWeekdaySelected}
                        />
                    </Field>
                </Row>

                <Row className="flex-spacebetween">
                    <Label htmlFor="startTime">{c('Label').t`Start time`}</Label>
                    <Field>
                        <Select
                            id="startTime"
                            options={[
                                { text: '11:00', value: '11:00' },
                                {
                                    text: '12:00',
                                    value: '12:00'
                                }
                            ]}
                            onChange={handleChangeStartTime}
                        />
                    </Field>
                </Row>

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

                <Row className="flex-spacebetween">
                    <Label htmlFor="endTime">{c('Label').t`End time`}</Label>
                    <Field>
                        <Select
                            id="endTime"
                            options={[
                                { text: '11:00', value: '11:00' },
                                {
                                    text: '12:00',
                                    value: '12:00'
                                }
                            ]}
                            onChange={handleChangeEndTime}
                        />
                    </Field>
                </Row>

                <Row className="flex-spacebetween">
                    <Label htmlFor="timezone">{c('Label').t`Timezone`}</Label>
                    <Field>
                        <Select
                            id="timezone"
                            options={[
                                {
                                    text: 'Europe/Vilnius: UTC +03:00',
                                    value: 'Europe/Vilnius'
                                },
                                {
                                    text: 'Europe/Zurich: UTC +02:00',
                                    value: 'Europe/Vilnius'
                                }
                            ]}
                            onChange={handleChangeTimezone}
                        />
                    </Field>
                </Row>

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
