import * as React from 'react';
import { Children, isValidElement, cloneElement, useState, useEffect, useRef } from 'react';
import { ObserverSections, SubSidebar, SettingsTitle, usePermissions, Paragraph } from 'react-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { hasPermission } from 'proton-shared/lib/helpers/permissions';
import { PERMISSIONS } from 'proton-shared/lib/constants';
import { c } from 'ttag';
import upgradeSvg from 'design-system/assets/img/pm-images/upgrade2.svg';
import passwordSvg from 'design-system/assets/img/pm-images/password.svg';

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

interface Props extends RouteComponentProps {
    config: PageConfig;
    children?: React.ReactNode;
}

const Page = ({ config, location, children }: Props) => {
    const userPermissions = usePermissions();
    const { sections = [], permissions: pagePermissions = [], text } = config;
    const [activeSection, setActiveSection] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.title = `${text} - ProtonMail`;
    }, [text]);

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        // Need a delay to let the navigation ends
        const handle = setTimeout(() => {
            if (containerRef.current) {
                const el = containerRef.current.querySelector(location.hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }, 100);

        return () => clearTimeout(handle);
    }, [location.hash]);

    if (userPermissions.includes(MEMBER) && pagePermissions.includes(ADMIN)) {
        return (
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky aligncenter">
                    <img src={passwordSvg} alt={c('Title').t`Password`} className="mb2" />
                    <h3 className="bold">{c('Title').t`Sorry, you can't access this page`}</h3>
                    <Paragraph>
                        {c('Info')
                            .t`Users can't make changes to organization settings. If you need admin priviledges, reach out to your system administrator.`}
                    </Paragraph>
                </div>
            </Main>
        );
    }

    if (!hasPermission(userPermissions, pagePermissions)) {
        return (
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky aligncenter">
                    <img src={upgradeSvg} alt={c('Title').t`Upgrade`} className="mb2" />
                    <h3 className="bold">{c('Title').t`You don't have an organization yet`}</h3>
                    <Paragraph>
                        {c('Info')
                            .t`Go to Subscription and upgrade to a paid plan to view these settings. Select a plan with multi-user support to manage users.`}
                    </Paragraph>
                </div>
            </Main>
        );
    }

    return (
        <>
            {sections.length ? <SubSidebar activeSection={activeSection} list={sections} /> : null}
            <Main>
                <SettingsTitle>{text}</SettingsTitle>
                <div className="container-section-sticky" ref={containerRef}>
                    <ObserverSections setActiveSection={setActiveSection}>
                        {Children.map(children, (child, index) => {
                            if (isValidElement<SectionProps>(child)) {
                                const { id, permissions: sectionPermissions = [] } =
                                    sections[index] || ({} as SectionConfig);
                                return cloneElement(child, {
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

export default withRouter(Page);
