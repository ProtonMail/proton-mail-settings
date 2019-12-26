import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Route, Link, withRouter } from 'react-router-dom';
import { Sidebar, AppsSidebar, MainAreaContext, StorageSpaceStatus, useToggle, useUser } from 'react-components';

import PrivateHeader from './PrivateHeader';
import { getPages } from '../../pages';

const PrivateLayout = ({ children, location }) => {
    const mainAreaRef = useRef();
    const { state: expanded, toggle: onToggleExpand, set: setExpand } = useToggle();
    const [{ isPaid }] = useUser();

    const list = getPages().map(({ text, route: link, icon }) => ({ text, link, icon }));

    const mobileLinks = [
        { to: '/inbox', icon: 'protonmail', external: true, current: true },
        isPaid && { to: '/calendar', icon: 'protoncalendar', external: true, current: false },
        { to: '/contacts', icon: 'protoncontacts', external: true, current: false }
    ].filter(Boolean);

    useEffect(() => {
        setExpand(false);
        mainAreaRef.current.scrollTop = 0;
    }, [location.pathname]);

    return (
        <div className="flex flex-nowrap no-scroll">
            <AppsSidebar
                items={[
                    <StorageSpaceStatus key="storage">
                        <Link to="/settings/subscription" className="pm-button pm-button--primary pm-button--small">
                            {c('Action').t`Upgrade`}
                        </Link>
                    </StorageSpaceStatus>
                ]}
            />
            <div className="content flex-item-fluid reset4print">
                <PrivateHeader
                    title={c('Title').t`Settings`}
                    location={location}
                    expanded={expanded}
                    onToggleExpand={onToggleExpand}
                />
                <div className="flex flex-nowrap">
                    <Route
                        path="/:path"
                        render={() => (
                            <Sidebar
                                url="/inbox"
                                mobileLinks={mobileLinks}
                                expanded={expanded}
                                onToggleExpand={onToggleExpand}
                                list={list}
                            />
                        )}
                    />
                    <div className="main flex-item-fluid main-area" ref={mainAreaRef}>
                        <div className="flex flex-reverse h100">
                            <MainAreaContext.Provider value={mainAreaRef}>{children}</MainAreaContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PrivateLayout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired
};

export default withRouter(PrivateLayout);
