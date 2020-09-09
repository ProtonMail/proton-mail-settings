import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';

import {
    StartImportSection,
    CurrentImportsSection,
    PastImportSection,
    SettingsPropsShared,
    RelatedSettingsSection,
    AppLink
} from 'react-components';
import { APPS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

export const getImportPage = () => {
    return {
        text: c('Title').t`Import assistant`,
        to: '/import',
        icon: 'import',
        subsections: [
            {
                text: c('Title').t`New import`,
                id: 'start-import'
            },
            {
                text: c('Title').t`Current imports`,
                id: 'current-import'
            },
            {
                text: c('Title').t`Past imports`,
                id: 'past-import'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings',
                hide: true
            }
        ]
    };
};

const ImportContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    const currentImportsRef = useRef<any>();
    const pastImportsRef = useRef<any>();

    const fetchCurrentImports = () => {
        currentImportsRef?.current?.fetch();
    };

    const fetchPastImports = () => {
        pastImportsRef?.current?.fetch();
    };

    return (
        <PrivateMainSettingsAreaWithPermissions
            config={getImportPage()}
            setActiveSection={setActiveSection}
            location={location}
        >
            <StartImportSection fetchCurrentImports={fetchCurrentImports} />
            <CurrentImportsSection fetchPastImports={fetchPastImports} ref={currentImportsRef} />
            <PastImportSection ref={pastImportsRef} />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'contacts',
                        text: c('Info').t`Import your contacts from another email service.`,
                        link: (
                            <AppLink to="/settings" toApp={APPS.PROTONCONTACTS} className="pm-button--primary mtauto">
                                {c('Action').t`Import Contacts`}
                            </AppLink>
                        )
                    },
                    {
                        icon: 'calendar',
                        text: c('Info').t`Go to Calendar settings if you want to import and manage your events.`,
                        link: (
                            <AppLink to="/settings" toApp={APPS.PROTONCALENDAR} className="pm-button--primary mtauto">
                                {c('Action').t`Import Events`}
                            </AppLink>
                        )
                    }
                ]}
            />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

ImportContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default ImportContainer;
