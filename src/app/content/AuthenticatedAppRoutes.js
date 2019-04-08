import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import AuthLayout from '../components/layout/AuthLayout.js';
import OverviewContainer from '../containers/OverviewContainer';
import DomainsContainer from '../containers/DomainsContainer';
import IdentityContainer from '../containers/IdentityContainer';
import AddressesContainer from '../containers/AddressesContainer';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import AccountContainer from '../containers/AccountContainer';
import SecurityContainer from '../containers/SecurityContainer';
import AppearanceContainer from '../containers/AppearanceContainer';

const NotFoundContainer = () => <h1>Not found</h1>;

const Routes = () => {
    return (
        <Router>
            <AuthLayout>
                <Switch>
                    <Route path="/settings" exact component={OverviewContainer} />
                    <Route path="/settings/account" component={AccountContainer} />
                    <Route path="/settings/subscription" component={SubscriptionContainer} />
                    <Route path="/settings/addresses" component={AddressesContainer} />
                    <Route path="/settings/domains" component={DomainsContainer} />
                    <Route path="/settings/identity" component={IdentityContainer} />
                    <Route path="/settings/security" component={SecurityContainer} />
                    <Route path="/settings/appearance" component={AppearanceContainer} />
                    <Route component={NotFoundContainer} />
                </Switch>
            </AuthLayout>
        </Router>
    );
};

export default hot(Routes);
