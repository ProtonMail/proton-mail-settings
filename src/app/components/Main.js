import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => {
    return <main className="main-area-content p2 flex-item-fluid">{children}</main>;
};

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main;
