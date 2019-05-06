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
    useMailSettings,
    useApiResult,
    useEventManager,
    useApiWithoutResult
} from 'react-components';
import AutoReplyToggle from './AutoReplyToggle';
import AutoReplyModal from './AutoReplyModal';
import AutoReplyTemplate from './AutoReplyTemplate';
import moment from 'moment';

export const duration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

const durationLabels = {
    [duration.FIXED]: c('Option').t`Fixed`,
    [duration.DAILY]: c('Option').t`Repeat daily`,
    [duration.WEEKLY]: c('Option').t`Repeat weekly`,
    [duration.MONTHLY]: c('Option').t`Repeat monthly`,
    [duration.PERMANENT]: c('Option').t`Permanent`
};

const updateAutoresponder = (AutoResponder) => ({
    url: 'settings/mail/autoresponder',
    method: 'put',
    data: { AutoResponder }
});

const Container = () => {
    const { close, isOpen, open } = useModal();
    const [{ AutoResponder }] = useMailSettings();
    const { call } = useEventManager();
    const { request } = useApiWithoutResult(updateAutoresponder);

    // TODO: translate or maybe even get from API?
    const templateStatus =
        AutoResponder.Repeat === duration.FIXED && moment().isAfter(AutoResponder.StartTime)
            ? 'Expired'
            : AutoResponder.IsEnabled
            ? 'Active'
            : 'Inactive';

    const toggleEnabled = async () => {
        await request({ ...AutoResponder, IsEnabled: !AutoResponder.IsEnabled });
        await call();
    };

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
                        <AutoReplyToggle
                            id="autoReplyToggle"
                            onToggle={toggleEnabled}
                            enabled={AutoResponder.IsEnabled}
                        />
                    </Field>
                </Row>

                {AutoResponder ? (
                    <AutoReplyTemplate
                        address="DUMMY ADDRESS"
                        status={templateStatus}
                        start={moment(AutoResponder.StartTime).format()}
                        end={moment(AutoResponder.EndTime).format()}
                        timezone={AutoResponder.Zone}
                        message={AutoResponder.Message}
                        duration={durationLabels[AutoResponder.Repeat]}
                        onDelete={console.log}
                        onEdit={open}
                    />
                ) : (
                    <PrimaryButton onClick={open}>{c('AutoReply').t`Create New Auto Reply`}</PrimaryButton>
                )}
            </div>
        </>
    );
};

export default Container;
