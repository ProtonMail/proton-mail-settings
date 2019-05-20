import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router';
import { Sidebar, SubSidebar, useUser } from 'react-components';

import pages from '../../pages';
import AuthHeader from './AuthHeader';

const AuthLayout = ({ children, history }) => {
    const [{ hasPaidMail }] = useUser();
    const [subSidebarList, setSubSidebarList] = useState([]);
    const list = pages
        .filter(({ paidFeature }) => {
            if (hasPaidMail) {
                return true;
            }
            return !paidFeature;
        })
        .map(({ text, route: link, icon }) => ({ text, link, icon }));

    const buildSubSidebar = (location) => {
        const { sections = [] } = pages.find(({ route }) => location.pathname === route) || {};
        setSubSidebarList(sections);
    };

    useEffect(() => {
        buildSubSidebar(location);
        const unsubscribe = history.listen(buildSubSidebar);

        return () => {
            unsubscribe();
        };
    }, []);

    /*
        Why flex-reverse fort he sidebar + main ?
        For keyboard navigation -> focus anchors first, then content.
     */
    return (
        <>
            <AuthHeader />
            <div className="flex flex-nowrap">
                <Route path="/:path" render={() => <Sidebar list={list} />} />
                <div className="main flex-item-fluid main-area">
                    <div className="flex flex-reverse">
                        {subSidebarList.length ? <SubSidebar list={subSidebarList} /> : null}
                        <main className="main-area-content p2 flex-item-fluid">{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(AuthLayout);
