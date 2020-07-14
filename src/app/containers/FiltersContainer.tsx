import React from 'react';
import { c } from 'ttag';
import { FiltersSection, SpamFiltersSection, RelatedSettingsSection, SettingsPropsShared } from 'react-components';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getFiltersPage = () => {
    return {
        text: c('Title').t`Filters`,
        to: '/settings/filters',
        icon: 'filter',
        subsections: [
            {
                text: c('Title').t`Custom filters`,
                id: 'custom'
            },
            {
                text: c('Title').t`Spam filters`,
                id: 'spam'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const FiltersContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            location={location}
            config={getFiltersPage()}
            setActiveSection={setActiveSection}
        >
            <FiltersSection />
            <SpamFiltersSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'folder-label',
                        text: c('Info')
                            .t`Go to Folders/labels settings if you want to create and manage mailbox folders and labels.`,
                        link: c('Link').t`Folders/labels settings`,
                        to: '/settings/labels'
                    },
                    {
                        icon: 'auto-reply',
                        text: c('Info')
                            .t`Go to Auto-reply settings if you want to create and manage auto-replies and notify anyone who tries to send you a message while you are out of the office.`,
                        link: c('Link').t`Auto-reply settings`,
                        to: '/settings/auto-reply'
                    }
                ]}
            />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

export default FiltersContainer;
