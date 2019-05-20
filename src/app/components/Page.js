import React from 'react';
import PropTypes from 'prop-types';
import { ObserverSections, SubSidebar, usePermissions } from 'react-components';

import Main from './Main';
import { hasPermission } from '../pages/helpers';

const Page = ({ page, components }) => {
    const userPermissions = usePermissions();
    const { sections, permissions: pagePermissions } = page;
    return (
        <>
            {sections.length ? <SubSidebar list={sections} /> : null}
            <Main>
                <ObserverSections>
                    {sections.map(({ permissions: sectionPermissions, id }) => {
                        if (hasPermission(userPermissions, pagePermissions, sectionPermissions)) {
                            const Component = components[id];
                            return <Component id={id} />;
                        }
                        return 'Upgrade now !'; // TODO
                    })}
                </ObserverSections>
            </Main>
        </>
    );
};
Page.propTypes = {
    page: PropTypes.object,
    components: PropTypes.object
};

export default Page;
