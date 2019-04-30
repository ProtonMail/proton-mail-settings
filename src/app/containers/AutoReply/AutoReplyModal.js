import React, { useState } from 'react';
import {
    Modal,
    ContentModal,
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
        .t`Auto-reply is always active on the days of the week you select, betweem the selected hours.`,
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
    const [message, setMessage] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleChangeStartDate = (e) => setStartDate(e.target.value);

    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleChangeMessage = (message) => {
        setMessage(message);
    };

    return (
        <Modal title={c('Title').t`Create auto-reply`} show={show} onClose={onClose}>
            <ContentModal>
                <Row>
                    <Label>{c('Label').t`Duration`}</Label>
                    <Field>
                        <Select onChange={handleChangeDuration} options={durationOptions} />
                    </Field>
                </Row>
                <Alert>{alerts[duration]}</Alert>

                <Row>
                    <Label>{c('Label').t`Start date`}</Label>
                    <Field>
                        <DateInput defaultDate={startDate} onSelect={setStartDate} format="DD MM YYYY" />
                    </Field>
                </Row>

                <Row>
                    <Label>{c('Label').t`Start date`}</Label>
                    <Field>
                        <Select
                            options={[
                                { text: '11:00', value: '11:00' },
                                {
                                    text: '12:00',
                                    value: '12:00'
                                }
                            ]}
                            onChange={handleChangeStartDate}
                        />
                    </Field>
                </Row>

                <RichTextEditor value={message} onChange={handleChangeMessage} />

                <Row className="mt1 flex-spacebetween">
                    <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                    <PrimaryButton>{c('Action').t`Create`}</PrimaryButton>
                </Row>
            </ContentModal>
        </Modal>
    );
};

AutoReplyModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AutoReplyModal;
