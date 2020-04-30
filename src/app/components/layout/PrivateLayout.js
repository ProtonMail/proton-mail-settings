import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import {
    Sidebar,
    AppsSidebar,
    MainAreaContext,
    StorageSpaceStatus,
    ErrorBoundary,
    useToggle,
    useUser,
    useModals,
    ShortcutsModal,
    useHotkeys,
    useDelinquent
} from 'react-components';

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

const PrivateLayout = ({ location }) => {
    const [user] = useUser();
    useDelinquent();
    const mainAreaRef = useRef();
    const { createModal, resetModals } = useModals();
    const { state: expanded, toggle: onToggleExpand, set: setExpand } = useToggle();
    const [activeSection, setActiveSection] = useState('');
    const list = getPages(user).map(({ text, route: link, icon, sections = [] }) => ({
        text,
        link,
        icon,
        ariaHiddenList: location.pathname !== link,
        list: sections.map(({ text, id }) => ({
            linkClassName: 'navigation__sublink',
            itemClassName: 'navigation__subitem',
            text,
            link: `${link}#${id}`,
            isActive: () => activeSection === id,
            ariaCurrent: activeSection === id ? 'true' : undefined
        }))
    }));

    const mobileLinks = [
        { to: '/inbox', icon: 'protonmail', external: true, current: true },
        { to: '/contacts', icon: 'protoncontacts', external: true, current: false },
        { to: '/calendar', icon: 'protoncalendar', external: true, current: false }
    ].filter(Boolean);

    useEffect(() => {
        setExpand(false);
        mainAreaRef.current.scrollTop = 0;
    }, [location.pathname]);

    useHotkeys((e) => {
        const { target, key } = e;

        if (key === 'Escape' || key === 'Esc') {
            resetModals();
            return;
        }

        const ignoreTags = ['input', 'select', 'textarea'];

        // ignore if event comes from an input, select, textarea or contenteditable element
        if (ignoreTags.includes(target.tagName.toLowerCase()) || target.isContentEditable) return;

        if (key === '?') {
            createModal(<ShortcutsModal />);
            return;
        }
    });

    return (
        <div className="flex flex-nowrap no-scroll">
            <AppsSidebar
                items={[
                    <StorageSpaceStatus
                        key="storage"
                        upgradeButton={
                            <Link to="/settings/subscription" className="pm-button pm-button--primary pm-button--small">
                                {c('Action').t`Upgrade`}
                            </Link>
                        }
                    />
                ]}
            />
            <div className="content flex-item-fluid reset4print">
                <PrivateHeader
                    title={c('Title').t`Settings`}
                    location={location}
                    expanded={expanded}
                    onToggleExpand={onToggleExpand}
                />
                <div className="flex flex-nowrap">
                    <Route
                        path="/:path"
                        render={() => (
                            <Sidebar
                                url="/inbox"
                                version={<SidebarVersion />}
                                mobileLinks={mobileLinks}
                                expanded={expanded}
                                onToggleExpand={onToggleExpand}
                                list={list}
                                activeSection={activeSection}
                            />
                        )}
                    />
                    <div className="main flex-item-fluid main-area" ref={mainAreaRef}>
                        <div className="flex flex-reverse h100">
                            <MainAreaContext.Provider value={mainAreaRef}>
                                <ErrorBoundary key={location.pathname}>
                                    <Switch>
                                        <Route
                                            path="/settings"
                                            exact
                                            render={({ history }) => <OverviewContainer history={history} />}
                                        />
                                        <Route
                                            path="/settings/account"
                                            render={({ history }) => (
                                                <AccountContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/organization"
                                            render={({ history }) => (
                                                <OrganizationContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/members"
                                            render={({ history }) => (
                                                <MembersContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/subscription"
                                            render={({ history }) => (
                                                <SubscriptionContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/addresses/:memberID?"
                                            render={({ history }) => (
                                                <AddressesContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/domains"
                                            render={({ history }) => (
                                                <DomainsContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/identity"
                                            render={({ history }) => (
                                                <IdentityContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/security"
                                            render={({ history }) => (
                                                <SecurityContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/appearance"
                                            render={({ history }) => (
                                                <AppearanceContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/keys"
                                            render={({ history }) => (
                                                <KeysContainer history={history} setActiveSection={setActiveSection} />
                                            )}
                                        />
                                        <Route
                                            path="/settings/apps"
                                            render={({ history }) => (
                                                <AppsContainer history={history} setActiveSection={setActiveSection} />
                                            )}
                                        />
                                        <Route
                                            path="/settings/general"
                                            render={({ history }) => (
                                                <GeneralContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/filters"
                                            render={({ history }) => (
                                                <FiltersContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/labels"
                                            render={({ history }) => (
                                                <FoldersLabelsContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/auto-reply"
                                            render={({ history }) => (
                                                <AutoReplyContainer
                                                    history={history}
                                                    setActiveSection={setActiveSection}
                                                />
                                            )}
                                        />
                                        <Route
                                            path="/settings/vpn"
                                            render={({ history }) => (
                                                <VPNContainer history={history} setActiveSection={setActiveSection} />
                                            )}
                                        />
                                        <Redirect to="/settings" />
                                    </Switch>
                                </ErrorBoundary>
                            </MainAreaContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PrivateLayout.propTypes = {
    location: PropTypes.object.isRequired
};

export default withRouter(PrivateLayout);
