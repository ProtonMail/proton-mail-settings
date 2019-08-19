import React from 'react';
import PropTypes from 'prop-types';

const Main = React.forwardRef(({ className = '', children }) => {
    return <main className={`main-area-content bg-white relative flex-item-fluid ${className}`}>{children}</main>;
});

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Main;
