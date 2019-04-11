import React from 'react';
import { c } from 'ttag';
import { DomainsSection, RelatedSettingsSection, CatchAllSection, ObserverSections } from 'react-components';

const DomainsContainer = () => {
    const relatedSettingsList = [
        {
            icon: 'alias',
            text: c('Info').t`TODO`,
            link: c('Link').t`Upgrade`,
            to: '/settings/subscription'
        },
        {
            icon: 'email-address',
            text: c('Info')
                .t`Go to the Addresses settings if you want to create and manage addresses to your custom domain. `,
            link: c('Link').t`Addresses settings`,
            to: '/settings/addresses'
        }
    ];
    return (
        <ObserverSections>
            <DomainsSection id="domains" />
            <CatchAllSection id="catch-all" />
            <RelatedSettingsSection id="related-settings" list={relatedSettingsList} />
        </ObserverSections>
    );
};

export default DomainsContainer;
