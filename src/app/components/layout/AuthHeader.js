import React from 'react';
import { c } from 'ttag';
import { Dropdown, DropdownMenu, useAuthenticationStore } from 'react-components';

const AuthHeader = () => {
    const authenticationStore = useAuthenticationStore();
    const list = [
        {
            text: c('Link').t`Logout`,
            type: 'button',
            onClick: () => authenticationStore.logout()
        }
    ];

    return (
        <header className="header flex flex-nowrap flex-spacebetween reset4print">
            <img src="" alt="ProtonMail" />
            <Dropdown content="Profile">
                <DropdownMenu list={list} />
            </Dropdown>
        </header>
    );
};

export default AuthHeader;
