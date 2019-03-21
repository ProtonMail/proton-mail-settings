import React from 'react';
import { c } from 'ttag';
// import { Dropdown, DropdownMenu } from 'react-components';

const Header = () => {
    const list = [
        {
            text: c('Header Menu').t`Logout`,
            type: 'link',
            link: '/'
        }
    ];

    /*
    <Dropdown content="Profile">
        <DropdownMenu list={list} />
    </Dropdown>
     */

    return (
        <header className="header flex flex-nowrap flex-spacebetween reset4print">
            <img src="" alt="ProtonMail Settings" />
        </header>
    );
};

export default Header;
