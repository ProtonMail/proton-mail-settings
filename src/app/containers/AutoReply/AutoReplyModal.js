import React, { useEffect } from 'react';
import {
    Modal,
    ContentModal,
    FooterModal,
    Button,
    PrimaryButton,
    useMailSettings,
    useApiWithoutResult,
    useEventManager
} from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import AutoReplyForm from './forms/AutoReplyForm';
import useAutoReplyForm from './forms/useAutoReplyForm';

const updateAutoresponder = (AutoResponder) => ({
    url: 'settings/mail/autoresponder',
    method: 'put',
    data: { AutoResponder }
});

const AutoReplyModal = ({ show, onClose }) => {
    const [{ AutoResponder }] = useMailSettings();
    const { model, updateModel, toAutoResponder, resetModel } = useAutoReplyForm(AutoResponder);
    const { request } = useApiWithoutResult(updateAutoresponder);
    const { call } = useEventManager();

    useEffect(() => {
        resetModel(AutoResponder);
    }, [AutoResponder]);

    const close = () => {
        resetModel();
        onClose();
    };

    const handleSubmit = async () => {
        await request(toAutoResponder(model));
        call();
        onClose();
    };

    // TODO: show different button text based on status - editing or creating
    return (
        <Modal title={c('Title').t`Create auto-reply`} type="small" show={show} onClose={close}>
            <ContentModal>
                <AutoReplyForm model={model} updateModel={updateModel} />

                <FooterModal>
                    <Button onClick={onClose}>{c('Action').t`Cancel`}</Button>
                    <PrimaryButton onClick={handleSubmit}>
                        {AutoResponder ? c('Action').t`Update` : c('Action').t`Create`}
                    </PrimaryButton>
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
