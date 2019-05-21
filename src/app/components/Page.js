import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { ObserverSections, SubSidebar, usePermissions } from 'react-components';
import { hasPermission } from 'proton-shared/lib/helpers/permissions';

import Main from './Main';
import Title from './Title';

const UpgradeNow = () => {
    return <>Upgrade now !</>;
};

const Page = ({ config, children }) => {
    const userPermissions = usePermissions();
    const { sections = [], permissions: pagePermissions, text } = config;

    if (!hasPermission(userPermissions, pagePermissions)) {
        return (
            <Main>
                <Title>{text}</Title>
                <UpgradeNow />
            </Main>
        );
    }

    return (
        <>
            {sections.length ? <SubSidebar list={sections} /> : null}
            <Main>
                <Title>{text}</Title>
                <ObserverSections>
                    {Children.map(children, (child, index) => {
                        const { id, permissions: sectionPermissions = [] } = sections[index] || {};
                        return React.cloneElement(child, {
                            id,
                            permission: hasPermission(userPermissions, sectionPermissions)
                        });
                    })}
                </ObserverSections>
            </Main>
        </>
    );
};

Page.propTypes = {
    config: PropTypes.object,
    children: PropTypes.node
};

export default Page;
