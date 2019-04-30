import React, { useState } from 'react';
import { Modal, ContentModal, Row, Label, Field, Select, Alert } from 'react-components';
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

    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
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
            </ContentModal>
        </Modal>
    );
};

AutoReplyModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AutoReplyModal;
