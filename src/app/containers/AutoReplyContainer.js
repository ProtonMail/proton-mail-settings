import React from 'react';
import { ObserverSections, AutoReplySection, RelatedSettingsSection } from 'react-components';
import { c } from 'ttag';

const AutoReplyContainer = () => {
    return (
        <ObserverSections>
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
        </ObserverSections>
    );
};

export default AutoReplyContainer;
