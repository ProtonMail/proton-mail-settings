import * as React from 'react';
import { c } from 'ttag';
import {
    Title,
    SubTitle,
    Alert,
    Row,
    Label,
    Info,
    Field,
    PrimaryButton,
    useModal,
    useMailSettings
} from 'react-components';
import AutoReplyToggle from './AutoReplyToggle';
import AutoReplyModal from './AutoReplyModal';

const Container = () => {
    const { close, isOpen, open } = useModal();
    const [{ AutoResponder }] = useMailSettings();

    return (
        <>
            <AutoReplyModal onClose={close} show={isOpen} onSubmit={console.log} />
            <Title>{c('AutoReply').t`Auto-Reply`}</Title>
            <div className="p1">
                <SubTitle>{c('AutoReply').t`Auto Reply`}</SubTitle>
                <Alert type="standard" className="mt1 mb1" learnMore="https://protonmail.com">
                    {c('AutoReply') // TODO: needed?
                        .t`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`}
                </Alert>

                <Row>
                    <Label htmlFor="autoReplyToggle">
                        <span className="mr1">{c('Label').t`Auto-Reply`}</span>
                        <Info
                            url="PLACEHOLDER" //TODO: add url
                            title={c('AutoReply').t`Auto reply information placeholder`}
                        />
                    </Label>
                    <Field>
                        <AutoReplyToggle id="autoReplyToggle" enabled={AutoResponder.IsEnabled} />
                    </Field>
                </Row>

                <PrimaryButton onClick={open}>{c('AutoReply').t`Create New Auto Reply`}</PrimaryButton>
            </div>
        </>
    );
};

export default Container;
