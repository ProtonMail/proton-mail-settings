import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ className = '', mainRef, children }) => {
    return (
        <main ref={mainRef} className={`main-area-content bg-white relative flex-item-fluid ${className}`}>
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    mainRef: PropTypes.object
};

export default Main;
