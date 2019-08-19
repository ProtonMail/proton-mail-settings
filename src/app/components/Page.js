import React, { Children, useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert, ObserverSections, SubSidebar, usePermissions } from 'react-components';
import { hasPermission } from 'proton-shared/lib/helpers/permissions';
import { c } from 'ttag';
import { Link } from 'react-router-dom';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Main from './Main';
import Title from './Title';

const { ADMIN, MEMBER } = PERMISSIONS;

const Page = ({ config, children }) => {
    const mainRef = useRef();
    const userPermissions = usePermissions();
    const { sections = [], permissions: pagePermissions, text } = config;

    if (userPermissions.includes(MEMBER) && pagePermissions.includes(ADMIN)) {
        return (
            <Main ref={mainRef}>
                <Title mainRef={mainRef}>{text}</Title>
                <div className="container-section-sticky">
                    <Alert type="warning">{c('Warning').t`Require admin permission to access to this page.`}</Alert>
                </div>
            </Main>
        );
    }

    if (!hasPermission(userPermissions, pagePermissions)) {
        return (
            <Main ref={mainRef}>
                <Title mainRef={mainRef}>{text}</Title>
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
            {sections.length ? <SubSidebar list={sections} /> : null}
            <Main ref={mainRef}>
                <Title mainRef={mainRef}>{text}</Title>
                <div className="container-section-sticky">
                    <ObserverSections>
                        {Children.map(children, (child, index) => {
                            const { id, permissions: sectionPermissions = [] } = sections[index] || {};
                            return React.cloneElement(child, {
                                id,
                                permission: hasPermission(userPermissions, sectionPermissions)
                            });
                        })}
                    </ObserverSections>
                </div>
            </Main>
        </>
    );
};

Page.propTypes = {
    config: PropTypes.object,
    children: PropTypes.node
};

export default Page;
