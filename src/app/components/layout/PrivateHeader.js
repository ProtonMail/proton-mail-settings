import React from 'react';
import { MainLogo, TopNavbar, TopNavbarLink, SupportDropdown, UpgradeButton, useUser } from 'react-components';
import { c } from 'ttag';

const PrivateHeader = () => {
    const [user = {}] = useUser();
    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo url="/inbox" external={true} />
            <TopNavbar>
                {user.hasPaidMail ? null : <UpgradeButton />}
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
