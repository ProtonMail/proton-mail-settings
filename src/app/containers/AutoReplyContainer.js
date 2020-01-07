import React from 'react';
import PropTypes from 'prop-types';
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
        permissions: [PAID_MAIL],
        sections: [
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

const AutoReplyContainer = ({ setActiveSection }) => {
    return (
        <Page config={getAutoReply()} setActiveSection={setActiveSection}>
            <AutoReplySection id="auto-reply" />
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
        </Page>
    );
};

AutoReplyContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default AutoReplyContainer;
