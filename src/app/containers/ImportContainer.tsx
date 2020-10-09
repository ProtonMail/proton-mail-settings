import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';

import {
    StartImportSection,
    CurrentImportsSection,
    PastImportSection,
    ImportExportSection,
    SettingsPropsShared,
    RelatedSettingsSection,
    AppLink,
} from 'react-components';
import { APPS, PERMISSIONS } from 'proton-shared/lib/constants';

import PrivateMainSettingsAreaWithPermissions from '../components/PrivateMainSettingsAreaWithPermissions';

const { PAID_MAIL } = PERMISSIONS;

export const getImportPage = () => {
    return {
        text: c('Title').t`Import & export`,
        to: '/import',
        icon: 'import',
        permissions: [PAID_MAIL],
        subsections: [
            {
                text: c('Title').t`Import Assistant`,
                id: 'start-import',
            },
            {
                text: c('Title').t`Current imports`,
                id: 'current-import',
            },
            {
                text: c('Title').t`Past imports`,
                id: 'past-import',
            },
            {
                text: c('Title').t`Import-Export app`,
                id: 'import-export',
            },
            {
                text: c('Title').t`Related features`,
                id: 'related-features',
                hide: true,
            },
        ],
    };
};

const ImportContainer = ({ setActiveSection, location }: SettingsPropsShared) => {
    return (
        <PrivateMainSettingsAreaWithPermissions
            config={getImportPage()}
            setActiveSection={setActiveSection}
            location={location}
        >
            <StartImportSection />
            <CurrentImportsSection />
            <PastImportSection />
            <ImportExportSection />
            <RelatedSettingsSection
                list={[
                    {
                        icon: 'contacts',
                        text: c('Info').t`Import your contacts from another email service.`,
                        link: (
                            <AppLink to="/" toApp={APPS.PROTONCONTACTS} className="pm-button--primary mtauto">
                                {c('Action').t`Import contacts`}
                            </AppLink>
                        ),
                    },
                    {
                        icon: 'calendar',
                        text: c('Info').t`Go to Calendar settings if you want to import and manage your events.`,
                        link: (
                            <AppLink to="/settings" toApp={APPS.PROTONCALENDAR} className="pm-button--primary mtauto">
                                {c('Action').t`Import calendar`}
                            </AppLink>
                        ),
                    },
                ]}
            />
        </PrivateMainSettingsAreaWithPermissions>
    );
};

ImportContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired,
};

export default ImportContainer;
