import React from 'react';
import { MainLogo, TopNavbar, TopNavbarLink, SupportDropdown } from 'react-components';
import { c } from 'ttag';

const PrivateHeader = () => {
    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo url="/inbox" external={true} />
            <TopNavbar>
                <TopNavbarLink to="/inbox" external={true} icon="email" text={c('Title').t`Mailbox`} />
                <TopNavbarLink
                    to="/settings"
                    icon="settings-master"
                    text={c('Title').t`Settings`}
                    aria-current="true"
                />
                <SupportDropdown />
            </TopNavbar>
        </header>
    );
};

export default PrivateHeader;
