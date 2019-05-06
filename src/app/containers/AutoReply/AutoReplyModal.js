import React from 'react';
import { Modal, ContentModal, FooterModal, Button, PrimaryButton, useMailSettings } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import AutoReplyForm from './forms/AutoReplyForm';
import useAutoReplyForm from './forms/useAutoReplyForm';

const AutoReplyModal = ({ show, onClose }) => {
    const [{ AutoResponder }] = useMailSettings(); // TODO: use this as initil model

    const { model: fm, updateModel, toAutoResponder } = useAutoReplyForm({
        StartTime: 0,
        EndTime: new Date().getTime() / 1000,
        DaysSelected: [],
        Repeat: 0,
        Subject: 'Auto',
        Message:
            'I am out of office with limited access to my email. Sent using <a href="https://protonmail.com/">ProtonMail</a> Secure Email.',
        IsEnabled: false,
        Zone: 'Europe/Zurich'
    });

    return (
        <Modal title={c('Title').t`Create auto-reply`} show={show} onClose={onClose}>
            <ContentModal>
                <AutoReplyForm model={fm} updateModel={updateModel} />

                <FooterModal>
                    <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                    <PrimaryButton onClick={() => console.log(toAutoResponder(fm))}>{c('Action')
                        .t`Create`}</PrimaryButton>
                </FooterModal>
            </ContentModal>
        </Modal>
    );
};

AutoReplyModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    initialModel: PropTypes.any,
    onSubmit: PropTypes.func
};

export default AutoReplyModal;
