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
    useModal,
    useMailSettings,
    useEventManager,
    useApiWithoutResult,
    RelatedSettingsSection,
    ObserverSections
} from 'react-components';
import AutoReplyToggle from './AutoReplyToggle';
import AutoReplyModal from './AutoReplyModal';
import AutoReplyTemplate from './AutoReplyTemplate';

// TODO: move it to react-shared
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

    const toggleEnabled = async () => {
        await request({ ...AutoResponder, IsEnabled: !AutoResponder.IsEnabled });
        await call();
    };

    return (
        <ObserverSections>
            <div id="auto-reply">
                <AutoReplyModal onClose={close} show={isOpen} />
                <div className="p1">
                    <SubTitle>{c('AutoReply').t`Auto-reply`}</SubTitle>
                    <Alert
                        type="standard"
                        className="mt1 mb1"
                        learnMore="https://protonmail.com/support/knowledge-base/autoresponder/"
                    >
                        {c('AutoReply')
                            .t`Automatic replies can respond automatically to incoming messages (such as when you are on vacation and can't respond).`}
                    </Alert>

                    <Row>
                        <Label htmlFor="autoReplyToggle" className="flex-item-centered-vert">{c('Label')
                            .t`Auto-reply`}</Label>
                        <Field>
                            <AutoReplyToggle
                                id="autoReplyToggle"
                                onToggle={toggleEnabled}
                                enabled={AutoResponder.IsEnabled}
                            />
                        </Field>
                    </Row>

                    {AutoResponder.IsEnabled && <AutoReplyTemplate autoresponder={AutoResponder} onEdit={open} />}
                </div>
            </div>
            <RelatedSettingsSection
                id="related-settings"
                list={[
                    {
                        icon: 'filter',
                        text: c('Info')
                            .t`Go to Filter Settings if you want to create and manage auto-replies by email address.`,
                        link: c('Link').t`Filter Settings`,
                        to: '/settings/filters'
                    }
                ]}
            />
        </ObserverSections>
    );
};

export default Container;
