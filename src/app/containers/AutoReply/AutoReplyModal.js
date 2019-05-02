import React, { useState } from 'react';
import { Modal, ContentModal, FooterModal, Alert, RichTextEditor, Button, PrimaryButton } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import DurationField from './fields/DurationField';
import FixedDurationForm, { initialModel as fixedInitialModel } from './forms/FixedDurationForm';
import DailyDurationForm, { initialModel as dailyInitialModel } from './forms/DailyDurationForm';
import WeeklyDurationForm, { initialModel as weeklyInitialModel } from './forms/WeeklyDurationForm';
import MonthlyDurationForm, { initialModel as monthlyInitialModel } from './forms/MonthlyDurationForm';

const forms = {
    fixed: FixedDurationForm,
    daily: DailyDurationForm,
    weekly: WeeklyDurationForm,
    monthly: MonthlyDurationForm,
    permanent: () => <Alert>{c('AutoReply').t`Auto-reply is active until you turn it off.`}</Alert>
};

const initialModels = {
    fixed: fixedInitialModel,
    daily: dailyInitialModel,
    weekly: weeklyInitialModel,
    monthly: monthlyInitialModel
};

const AutoReplyModal = ({ show, onClose }) => {
    const [duration, setDuration] = useState('fixed');
    const [model, setModel] = useState(fixedInitialModel);
    const [message, setMessage] = useState(
        'I am out of office with limited access to my email.<br /><br/>Sent using <a href="https://protonmail.com/">ProtonMail</a> Secure Email.'
    );

    const AutoReplyForm = forms[duration];

    const updateModel = (field) => (value) => setModel({ ...model, [field]: value });
    const handleChangeMessage = (value) => setMessage(value);
    const handleChangeDuration = (value) => {
        setModel(initialModels[value]);
        setDuration(value);
    };

    return (
        <Modal title={c('Title').t`Create auto-reply`} show={show} onClose={onClose}>
            <ContentModal>
                <DurationField value={duration} onChange={handleChangeDuration} />

                <AutoReplyForm model={model} updateModel={updateModel} />

                <RichTextEditor value={message} onChange={handleChangeMessage} />

                <FooterModal>
                    <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                    <PrimaryButton
                        onClick={() =>
                            console.log({
                                duration,
                                message,
                                ...model
                            })
                        }
                    >{c('Action').t`Create`}</PrimaryButton>
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
