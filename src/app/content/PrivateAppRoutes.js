import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-components';

import OverviewContainer from '../containers/OverviewContainer';
import DomainsContainer from '../containers/DomainsContainer';
import OrganizationContainer from '../containers/OrganizationContainer';
import MembersContainer from '../containers/MembersContainer';
import IdentityContainer from '../containers/IdentityContainer';
import AddressesContainer from '../containers/AddressesContainer';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import AccountContainer from '../containers/AccountContainer';
import SecurityContainer from '../containers/SecurityContainer';
import AppearanceContainer from '../containers/AppearanceContainer';
import AppsContainer from '../containers/AppsContainer';
import KeysContainer from '../containers/KeysContainer';
import GeneralContainer from '../containers/GeneralContainer';
import FiltersContainer from '../containers/FiltersContainer';
import FoldersLabelsContainer from '../containers/FoldersLabelsContainer';
import AutoReplyContainer from '../containers/AutoReplyContainer';
import VPNContainer from '../containers/VPNContainer';

const NotFoundContainer = () => <h1>Not found</h1>;

const Routes = () => {
    return (
        <Route
            render={({ location }) => (
                <ErrorBoundary key={location.pathname}>
                    <Switch>
                        <Route path="/settings" exact component={OverviewContainer} />
                        <Route path="/settings/account" component={AccountContainer} />
                        <Route path="/settings/organization" component={OrganizationContainer} />
                        <Route path="/settings/members" component={MembersContainer} />
                        <Route path="/settings/subscription" component={SubscriptionContainer} />
                        <Route path="/settings/addresses/:memberID?" component={AddressesContainer} />
                        <Route path="/settings/domains" component={DomainsContainer} />
                        <Route path="/settings/identity" component={IdentityContainer} />
                        <Route path="/settings/security" component={SecurityContainer} />
                        <Route path="/settings/appearance" component={AppearanceContainer} />
                        <Route path="/settings/keys" component={KeysContainer} />
                        <Route path="/settings/apps" component={AppsContainer} />
                        <Route path="/settings/general" component={GeneralContainer} />
                        <Route path="/settings/filters" component={FiltersContainer} />
                        <Route path="/settings/labels" component={FoldersLabelsContainer} />
                        <Route path="/settings/auto-reply" component={AutoReplyContainer} />
                        <Route path="/settings/vpn" component={VPNContainer} />
                        <Route component={NotFoundContainer} />
                    </Switch>
                </ErrorBoundary>
            )}
        />
    );
};

export default Routes;
