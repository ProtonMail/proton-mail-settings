import React, { useState, useEffect } from 'react';
import { c } from 'ttag';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import {
    Sidebar,
    PrivateHeader,
    useToggle,
    useUser,
    PrivateAppContainer,
    SidebarBackButton,
    useActiveBreakpoint,
    SidebarList,
    SidebarNav,
    SidebarListItemsWithSubsections,
    MainLogo
} from 'react-components';

import OverviewContainer from '../../containers/OverviewContainer';
import DomainsContainer from '../../containers/DomainsContainer';
import OrganizationContainer from '../../containers/OrganizationContainer';
import MembersContainer from '../../containers/MembersContainer';
import IdentityContainer from '../../containers/IdentityContainer';
import AddressesContainer from '../../containers/AddressesContainer';
import SubscriptionContainer from '../../containers/SubscriptionContainer';
import AccountContainer from '../../containers/AccountContainer';
import SecurityContainer from '../../containers/SecurityContainer';
import AppearanceContainer from '../../containers/AppearanceContainer';
import AppsContainer from '../../containers/AppsContainer';
import KeysContainer from '../../containers/KeysContainer';
import GeneralContainer from '../../containers/GeneralContainer';
import FiltersContainer from '../../containers/FiltersContainer';
import FoldersLabelsContainer from '../../containers/FoldersLabelsContainer';
import AutoReplyContainer from '../../containers/AutoReplyContainer';
import VPNContainer from '../../containers/VPNContainer';
import SidebarVersion from '../../content/SidebarVersion';
import { getPages } from '../../pages';
import { APPS } from 'proton-shared/lib/constants';

const PrivateLayout = ({ location }: RouteComponentProps) => {
    const [user] = useUser();
    const { isNarrow } = useActiveBreakpoint();
    const { state: expanded, toggle: onToggleExpand, set: setExpand } = useToggle();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setExpand(false);
    }, [location.pathname, location.hash]);

    const base = '/inbox';
    const logo = <MainLogo to={base} toApp={APPS.PROTONMAIL} />;

    const header = (
        <PrivateHeader
            logo={logo}
            title={c('Title').t`Settings`}
            expanded={expanded}
            onToggleExpand={onToggleExpand}
            isNarrow={isNarrow}
        />
    );

    const sidebar = (
        <Sidebar
            logo={logo}
            expanded={expanded}
            onToggleExpand={onToggleExpand}
            primary={
                <SidebarBackButton to={base} toApp={APPS.PROTONMAIL} target="_self">{c('Action')
                    .t`Back to Mailbox`}</SidebarBackButton>
            }
            version={<SidebarVersion />}
        >
            <SidebarNav>
                <SidebarList>
                    <SidebarListItemsWithSubsections
                        list={getPages(user)}
                        pathname={window.location.pathname}
                        activeSection={activeSection}
                    />
                </SidebarList>
            </SidebarNav>
        </Sidebar>
    );

    return (
        <PrivateAppContainer header={header} sidebar={sidebar}>
            <Switch>
                <Route path="/" exact render={() => <OverviewContainer />} />
                <Route
                    path="/account"
                    render={({ location }) => (
                        <AccountContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/organization"
                    render={({ location }) => (
                        <OrganizationContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/members"
                    render={({ location }) => (
                        <MembersContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/subscription"
                    render={({ location }) => (
                        <SubscriptionContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/addresses/:memberID?"
                    render={({ location }) => (
                        <AddressesContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/domains"
                    render={({ location }) => (
                        <DomainsContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/identity"
                    render={({ location }) => (
                        <IdentityContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/security"
                    render={({ location }) => (
                        <SecurityContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/appearance"
                    render={({ location }) => (
                        <AppearanceContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/keys"
                    render={({ location }) => <KeysContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Route
                    path="/apps"
                    render={({ location }) => <AppsContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Route
                    path="/general"
                    render={({ location }) => (
                        <GeneralContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/filters"
                    render={({ location }) => (
                        <FiltersContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/labels"
                    render={({ location }) => (
                        <FoldersLabelsContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/auto-reply"
                    render={({ location }) => (
                        <AutoReplyContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/vpn"
                    render={({ location }) => <VPNContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Redirect to="/" />
            </Switch>
        </PrivateAppContainer>
    );
};

export default withRouter(PrivateLayout);
