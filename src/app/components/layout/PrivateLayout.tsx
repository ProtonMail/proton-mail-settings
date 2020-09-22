import React, { useState, useEffect } from 'react';
import { c } from 'ttag';
import { Redirect, Route, useLocation, Switch } from 'react-router-dom';
import {
    Sidebar,
    PrivateHeader,
    useToggle,
    PrivateAppContainer,
    SidebarBackButton,
    useActiveBreakpoint,
    SidebarList,
    SidebarNav,
    SidebarListItemsWithSubsections,
    MainLogo,
    useUser,
} from 'react-components';

import OverviewContainer from '../../containers/OverviewContainer';
import ImportContainer from '../../containers/ImportContainer';
import IdentityContainer from '../../containers/IdentityContainer';
import AddressesContainer from '../../containers/AddressesContainer';
import SecurityContainer from '../../containers/SecurityContainer';
import AppearanceContainer from '../../containers/AppearanceContainer';
import AppsContainer from '../../containers/AppsContainer';
import KeysContainer from '../../containers/KeysContainer';
import GeneralContainer from '../../containers/GeneralContainer';
import FiltersContainer from '../../containers/FiltersContainer';
import FoldersLabelsContainer from '../../containers/FoldersLabelsContainer';
import AutoReplyContainer from '../../containers/AutoReplyContainer';
import SidebarVersion from '../../content/SidebarVersion';
import { getPages } from '../../pages';
import { APPS, FEATURE_FLAGS } from 'proton-shared/lib/constants';

const PrivateLayout = () => {
    const [user] = useUser();
    const location = useLocation();
    const { isNarrow } = useActiveBreakpoint();
    const { state: expanded, toggle: onToggleExpand, set: setExpand } = useToggle();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        setExpand(false);
    }, [location.pathname, location.hash]);

    const base = '/inbox';
    const logo = <MainLogo to={base} toApp={APPS.PROTONMAIL} target="_self" />;

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
                        pathname={location.pathname}
                        activeSection={activeSection}
                    />
                </SidebarList>
            </SidebarNav>
        </Sidebar>
    );

    return (
        <PrivateAppContainer header={header} sidebar={sidebar}>
            <Switch>
                <Route path="/overview" exact render={() => <OverviewContainer user={user} />} />
                {FEATURE_FLAGS.includes('mail-import') && (
                    <Route
                        path="/import"
                        render={({ location }) => (
                            <ImportContainer location={location} setActiveSection={setActiveSection} />
                        )}
                    />
                )}
                <Route
                    path="/addresses/:memberID?"
                    render={({ location }) => (
                        <AddressesContainer location={location} setActiveSection={setActiveSection} user={user} />
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
                <Redirect to="/overview" />
            </Switch>
        </PrivateAppContainer>
    );
};

export default PrivateLayout;
