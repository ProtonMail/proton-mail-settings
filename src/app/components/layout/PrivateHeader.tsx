import React from 'react';
import {
    MainLogo,
    TopNavbar,
    TopNavbarLink,
    UpgradeButton,
    Hamburger,
    useUser,
    useActiveBreakpoint,
    BlackFridayNavbarLink,
    MailBlackFridayModal,
    useBlackFriday,
    AppsDropdown
} from 'react-components';
import { c } from 'ttag';
import * as H from 'history';

interface Props {
    title: string;
    location: H.Location;
    expanded: boolean;
    onToggleExpand: () => void;
}
const PrivateHeader = ({ title, location, expanded, onToggleExpand }: Props) => {
    const [user] = useUser();
    const { hasPaidMail } = user;
    const { isNarrow } = useActiveBreakpoint();
    const isBlackFriday = useBlackFriday();

    return (
        <header className="header flex flex-items-center flex-nowrap reset4print">
            <div className="logo-container flex flex-spacebetween flex-items-center flex-nowrap nomobile">
                <MainLogo url="/inbox" external={true} />
                <AppsDropdown />
            </div>
            <Hamburger expanded={expanded} onToggle={onToggleExpand} />
            {title && isNarrow ? <span className="h3 mb0 ellipsis lh-standard">{title}</span> : null}
            <TopNavbar>
                {hasPaidMail ? null : isBlackFriday ? (
                    <BlackFridayNavbarLink
                        to="/settings/subscription"
                        location={location}
                        getModal={({ plans, onSelect }: any) => (
                            <MailBlackFridayModal plans={plans} onSelect={onSelect} />
                        )}
                    />
                ) : (
                    <UpgradeButton />
                )}
                <TopNavbarLink to="/inbox" external={true} icon="mailbox" text={c('Title').t`Mailbox`} />
                {isNarrow ? null : (
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

export default PrivateHeader;
