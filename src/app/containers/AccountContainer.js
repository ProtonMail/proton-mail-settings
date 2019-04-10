import React from 'react';
import { UsernameSection, NewsSection, DeleteSection, EmailSection, ObserverSections } from 'react-components';

const AccountContainer = () => {
    return (
        <ObserverSections>
            <UsernameSection id="username" />
            <EmailSection id="email" />
            <NewsSection id="news" />
            <DeleteSection id="delete" />
        </ObserverSections>
    );
};

export default AccountContainer;
