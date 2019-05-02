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

const durations = {
    fixed: 'fixed',
    daily: 'daily',
    weekly: 'weekly',
    monthly: 'monthly',
    permanent: 'permanent'
};

const alerts = {
    fixed: c('AutoReply').t`Auto-reply is active from the start time to the end time`,
    daily: c('AutoReply')
        .t`Auto-reply is always active on the days of the week you select, between the selected hours.`,
    weekly: c('AutoReply').t`Auto-reply is active each week between the selected start and end time.`,
    monthly: c('AutoReply').t`Auto-reply is active each month between the selected start and end time.`,
    permanent: c('AutoReply').t`Auto-reply is active until you turn it off.`
};

const durationOptions = [
    {
        text: 'Fixed duration',
        value: durations.fixed
    },
    {
        text: 'Repeat daily',
        value: durations.daily
    },
    {
        text: 'Repeat weekly',
        value: durations.weekly
    },
    {
        text: 'Repeat monthly',
        value: durations.monthly
    },
    {
        text: 'Permanent',
        value: durations.permanent
    }
];

const AutoReplyModal = ({ show, onClose }) => {
    const [duration, setDuration] = useState(durations.daily);
    const [message, setMessage] = useState(
        'I am out of office with limited access to my email.<br /><br/>Sent using <a href="https://protonmail.com/">ProtonMail</a> Secure Email.'
    );
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleChangeStartTime = (e) => console.log(e.target.value);
    const handleChangeEndTime = (e) => console.log(e.target.value);
    const handleChangeTimezone = (e) => console.log(e.target.value);

    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleChangeMessage = (message) => {
        setMessage(message);
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
                                    text: 'Europe/Vilnius: UTC  +03:00',
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
