import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import AuthLayout from '../components/layout/AuthLayout.js';
import OverviewContainer from '../containers/OverviewContainer';

const NotFoundContainer = () => <h1>Not found</h1>;

const Routes = () => {
    return (
        <Router>
            <AuthLayout>
                <Switch>
                    <Route path="/settings" exact component={OverviewContainer} />
                    <Route component={NotFoundContainer} />
                </Switch>
            </AuthLayout>
        </Router>
    );
};

export default hot(Routes);
