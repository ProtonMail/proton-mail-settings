import * as React from 'react';
import { Children, isValidElement, useState } from 'react';
import { ObserverSections, SubSidebar, SettingsTitle, usePermissions, Alert } from 'react-components';
import { Link } from 'react-router-dom';
import { hasPermission } from 'proton-shared/lib/helpers/permissions';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import { c } from 'ttag';

import Main from './Main';

const { ADMIN, MEMBER } = PERMISSIONS;

interface SectionProps {
    id: string;
    permission: boolean;
}

interface SectionConfig {
    id: string;
    permissions?: PERMISSIONS[];
    text: React.ReactNode;
    hide?: boolean;
}

export interface PageConfig {
    permissions?: PERMISSIONS[];
    sections: SectionConfig[];
    text: React.ReactNode;
    route?: string;
    link?: string;
    icon?: string;
}

interface Props {
    config: PageConfig;
    children?: React.ReactNode;
}

const Page = ({ config, children }: Props) => {
    const userPermissions = usePermissions();
    const { sections = [], permissions: pagePermissions = [], text } = config;
    const [activeSection, setActiveSection] = useState('');

    if (userPermissions.includes(MEMBER) && pagePermissions.includes(ADMIN)) {
        return (
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky">
                    <Alert type="warning">{c('Warning').t`Require admin permission to access to this page.`}</Alert>
                </div>
            </Main>
        );
    }

    if (!hasPermission(userPermissions, pagePermissions)) {
        return (
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky">
                    <Alert>
                        <Link to="/settings/subscription">{c('Link').t`Upgrade now`}</Link>
                    </Alert>
                </div>
            </Main>
        );
    }

    return (
        <>
            {sections.length ? <SubSidebar activeSection={activeSection} list={sections} /> : null}
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky">
                    <ObserverSections setActiveSection={setActiveSection}>
                        {Children.map(children, (child, index) => {
                            if (isValidElement<SectionProps>(child)) {
                                const { id, permissions: sectionPermissions = [] } =
                                    sections[index] || ({} as SectionConfig);
                                return React.cloneElement(child, {
                                    id,
                                    permission: hasPermission(userPermissions, sectionPermissions)
                                });
                            }
                        })}
                    </ObserverSections>
                </div>
            </Main>
        </>
    );
};

export default Page;
