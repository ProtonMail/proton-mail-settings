import React from 'react';
import PropTypes from 'prop-types';
import { MainLogo, TopNavbar, TopNavbarLink, UpgradeButton, Hamburger, useUser } from 'react-components';
import { c } from 'ttag';

const PrivateHeader = ({ expanded, onToggleExpand }) => {
    const [user = {}] = useUser();
    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo url="/inbox" className="nomobile" external={true} />
            <Hamburger expanded={expanded} onToggle={onToggleExpand} />
            <TopNavbar>
                {user.hasPaidMail ? null : <UpgradeButton />}
                <TopNavbarLink to="/inbox" external={true} icon="mailbox" text={c('Title').t`Mailbox`} />
                <TopNavbarLink
                    to="/settings"
                    icon="settings-master"
                    text={c('Title').t`Settings`}
                    aria-current="true"
                />
            </TopNavbar>
        </header>
    );
};

PrivateHeader.propTypes = {
    expanded: PropTypes.bool,
    onToggleExpand: PropTypes.func
};

export default PrivateHeader;
