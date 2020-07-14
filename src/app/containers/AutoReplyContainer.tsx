import React from 'react';
import { AutoReplySection, RelatedSettingsSection, SettingsPropsShared } from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { PAID_MAIL } = PERMISSIONS;

export const getAutoReply = () => {
    return {
        text: c('Title').t`Auto-reply`,
        to: '/settings/auto-reply',
        icon: 'auto-reply',
        permissions: [PAID_MAIL],
        subsections: [
            {
                text: c('Title').t`Auto-reply`,
                id: 'auto-reply'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const AutoReplyContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getAutoReply()}
            setActiveSection={setActiveSection}
        >
            <AutoReplySection />
            <RelatedSettingsSection
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
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default AutoReplyContainer;
