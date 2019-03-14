import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Route } from 'react-router';
import { Sidebar } from 'react-components';

import Header from '../component/Header';

const getSidebar = () => {
    return [
        {
            text: c('Sidebar').t`Labels`,
            link: '/settings/labels'
        },
        {
            text: c('Sidebar').t`Account`,
            link: '/settings/account'
        },
        {
            text: c('Sidebar').t`Appearance`,
            link: '/settings/appearance'
        },
        {
            text: c('Sidebar').t`Keys`,
            link: '/settings/keys'
        },
        {
            text: c('Sidebar').t`Notifications`,
            link: '/settings/notifications'
        },
        {
            text: c('Sidebar').t`Security`,
            link: '/settings/security'
        },
        {
            text: c('Sidebar').t`Advanced`,
            link: '/settings/advanced'
        }
    ];
};

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex flex-nowrap">
                <Sidebar list={getSidebar()} />
                <main className="main flex-item-fluid main-area main-area-content">{children}</main>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
