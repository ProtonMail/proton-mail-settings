import React from 'react';
import PropTypes from 'prop-types';

const PublicLayout = ({ children }) => {
    return (
        <div className="flex flex-nowrap">
            <main className="main flex-item-fluid main-area">{children}</main>
        </div>
    );
};

PublicLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PublicLayout;
