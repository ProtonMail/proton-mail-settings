import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginContainer, ApiContext } from 'react-components';

import { createApi } from '../api';

const UnAuthenticatedApp = ({ onLogin }) => {
    const api = createApi();

    return (
        <ApiContext.Provider value={api}>
            <Router>
                <Switch>
                    <Route render={() => <div>Hey monique</div>} />
                </Switch>
            </Router>
        </ApiContext.Provider>
    );
};

export default UnAuthenticatedApp;
