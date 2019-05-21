import React from 'react';
import { AutoReplySection, RelatedSettingsSection } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { PAID_MAIL } = PERMISSIONS;

export const getAutoReply = () => {
    return {
        text: c('Title').t`Auto-reply`,
        route: '/settings/auto-reply',
        icon: 'auto-reply',
        permissions: [PAID_MAIL]
    };
};

const AutoReplyContainer = () => {
    return (
        <Page config={getAutoReply()}>
            <AutoReplySection id="auto-reply" />
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
        </Page>
    );
};

export default AutoReplyContainer;
