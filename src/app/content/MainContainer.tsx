import React, { useState, useEffect } from 'react';
import { c } from 'ttag';
import { Redirect, Route, useLocation, Switch } from 'react-router-dom';
import { APPS } from 'proton-shared/lib/constants';
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

import OverviewContainer from '../containers/OverviewContainer';
import ImportContainer from '../containers/ImportContainer';
import IdentityContainer from '../containers/IdentityContainer';
import AddressesContainer from '../containers/AddressesContainer';
import SecurityContainer from '../containers/SecurityContainer';
import AppearanceContainer from '../containers/AppearanceContainer';
import AppsContainer from '../containers/AppsContainer';
import BridgeContainer from '../containers/BridgeContainer';
import KeysContainer from '../containers/KeysContainer';
import GeneralContainer from '../containers/GeneralContainer';
import FiltersContainer from '../containers/FiltersContainer';
import FoldersLabelsContainer from '../containers/FoldersLabelsContainer';
import AutoReplyContainer from '../containers/AutoReplyContainer';
import SidebarVersion from './SidebarVersion';
import { getPages } from '../pages';

const MainContainer = () => {
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
                <Route path="/overview" exact>
                    <OverviewContainer user={user} />
                </Route>
                {user.hasPaidMail && (
                    <Route path="/import">
                        <ImportContainer location={location} setActiveSection={setActiveSection} />
                    </Route>
                )}
                <Route path="/addresses/:memberID?">
                    <AddressesContainer location={location} setActiveSection={setActiveSection} user={user} />
                </Route>
                <Route path="/identity">
                    <IdentityContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/security">
                    <SecurityContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/appearance">
                    <AppearanceContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/keys">
                    <KeysContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/apps">
                    <AppsContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/general">
                    <GeneralContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/filters">
                    <FiltersContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/labels">
                    <FoldersLabelsContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/auto-reply">
                    <AutoReplyContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Route path="/bridge">
                    <BridgeContainer location={location} setActiveSection={setActiveSection} />
                </Route>
                <Redirect to="/overview" />
            </Switch>
        </PrivateAppContainer>
    );
};

export default MainContainer;
