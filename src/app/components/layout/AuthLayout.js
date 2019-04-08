import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Sidebar } from 'react-components';

import pages from '../../pages';
import AuthHeader from './AuthHeader';

const AuthLayout = ({ children }) => {
    return (
        <>
            <AuthHeader />
            <div className="flex flex-nowrap">
                <Route
                    path="/:path"
                    render={() => <Sidebar list={pages.map(({ text, route: link }) => ({ text, link }))} />}
                />
                <main className="main flex-item-fluid main-area main-area-content">{children}</main>
            </div>
        </>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthLayout;
