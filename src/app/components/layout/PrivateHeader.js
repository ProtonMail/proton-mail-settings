import React from 'react';
import PropTypes from 'prop-types';
import {
    MainLogo,
    TopNavbar,
    TopNavbarLink,
    UpgradeButton,
    Hamburger,
    useUser,
    useActiveBreakpoint
} from 'react-components';
import { c } from 'ttag';

const PrivateHeader = ({ title, expanded, onToggleExpand }) => {
    const [user = {}] = useUser();
    const { hasPaidMail } = user;
    const { isMobile } = useActiveBreakpoint();

    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo url="/inbox" className="nomobile" external={true} />
            <Hamburger expanded={expanded} onToggle={onToggleExpand} />
            {title && isMobile ? <span className="big ellipsis">{title}</span> : null}
            <TopNavbar>
                {hasPaidMail || isMobile ? null : <UpgradeButton />}
                <TopNavbarLink to="/inbox" external={true} icon="mailbox" text={c('Title').t`Mailbox`} />
                {isMobile ? null : (
                    <TopNavbarLink
                        to="/settings"
                        icon="settings-master"
                        text={c('Title').t`Settings`}
                        aria-current="true"
                    />
                )}
            </TopNavbar>
        </header>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string,
    expanded: PropTypes.bool,
    onToggleExpand: PropTypes.func
};

export default PrivateHeader;
