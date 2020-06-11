import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-nowrap">
            <main className="main flex-item-fluid main-area">{children}</main>
        </div>
    );
};

export default PublicLayout;
