import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Sidebar } from 'react-components';

import PrivateHeader from './PrivateHeader';
import { getPages } from '../../pages';

const PrivateLayout = ({ children }) => {
    const list = getPages().map(({ text, route: link, icon }) => ({ text, link, icon }));
    return (
        <>
            <PrivateHeader />
            <div className="flex flex-nowrap">
                <Route path="/:path" render={() => <Sidebar list={list} />} />
                <div className="main flex-item-fluid main-area">
                    <div className="flex flex-reverse">{children}</div>
                </div>
            </div>
        </>
    );
};

PrivateLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateLayout;
