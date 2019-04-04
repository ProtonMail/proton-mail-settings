import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import OverviewContainer from './containers/OverviewContainer';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route component={OverviewContainer} />
            </Switch>
        </Router>
    );
};

export default hot(Routes);
