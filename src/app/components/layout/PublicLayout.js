import React from 'react';
import PropTypes from 'prop-types';

const PublicLayout = ({ children }) => {
    return <main className="main-full flex flex-column flex-nowrap reset4print">{children}</main>;
};

PublicLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PublicLayout;
