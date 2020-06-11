import React, { useState, useEffect } from 'react';
import { c } from 'ttag';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Sidebar, useToggle, useUser, getSectionConfigProps, PrivateAppContainer } from 'react-components';

import PrivateHeader from './PrivateHeader';
import { getPages } from '../../pages';

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

const PrivateLayout = ({ location }: RouteComponentProps) => {
    const [user] = useUser();
    const { state: expanded, toggle: onToggleExpand, set: setExpand } = useToggle();
    const [activeSection, setActiveSection] = useState('');
    const list = getSectionConfigProps(getPages(user), location.pathname, activeSection);

    useEffect(() => {
        setExpand(false);
    }, [location.pathname]);

    const header = (
        <PrivateHeader
            title={c('Title').t`Settings`}
            location={location}
            expanded={expanded}
            onToggleExpand={onToggleExpand}
        />
    );
    const sidebar = (
        <Sidebar
            url="/inbox"
            version={<SidebarVersion />}
            expanded={expanded}
            onToggleExpand={onToggleExpand}
            list={list}
        />
    );

    return (
        <PrivateAppContainer header={header} sidebar={sidebar}>
            <Switch>
                <Route path="/settings" exact render={() => <OverviewContainer />} />
                <Route
                    path="/settings/account"
                    render={({ location }) => (
                        <AccountContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/organization"
                    render={({ location }) => (
                        <OrganizationContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/members"
                    render={({ location }) => (
                        <MembersContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/subscription"
                    render={({ location }) => (
                        <SubscriptionContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/addresses/:memberID?"
                    render={({ location }) => (
                        <AddressesContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/domains"
                    render={({ location }) => (
                        <DomainsContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/identity"
                    render={({ location }) => (
                        <IdentityContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/security"
                    render={({ location }) => (
                        <SecurityContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/appearance"
                    render={({ location }) => (
                        <AppearanceContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/keys"
                    render={({ location }) => <KeysContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Route
                    path="/settings/apps"
                    render={({ location }) => <AppsContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Route
                    path="/settings/general"
                    render={({ location }) => (
                        <GeneralContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/filters"
                    render={({ location }) => (
                        <FiltersContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/labels"
                    render={({ location }) => (
                        <FoldersLabelsContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/auto-reply"
                    render={({ location }) => (
                        <AutoReplyContainer location={location} setActiveSection={setActiveSection} />
                    )}
                />
                <Route
                    path="/settings/vpn"
                    render={({ location }) => <VPNContainer location={location} setActiveSection={setActiveSection} />}
                />
                <Redirect to="/settings" />
            </Switch>
        </PrivateAppContainer>
    );
};

export default withRouter(PrivateLayout);
