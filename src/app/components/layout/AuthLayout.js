import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Sidebar } from 'react-components';

import AuthHeader from './AuthHeader';
import { getPages } from '../../pages';

const AuthLayout = ({ children }) => {
    const list = getPages().map(({ text, route: link, icon }) => ({ text, link, icon }));
    return (
        <>
            <AuthHeader />
            <div className="flex flex-nowrap">
                <Route path="/:path" render={() => <Sidebar list={list} />} />
                <div className="main flex-item-fluid main-area">
                    <div className="flex flex-reverse">{children}</div>
                </div>
            </div>
        </>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthLayout;
