import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import { addLocale, useLocale, c } from 'ttag';
import { Icons, ApiContext } from 'react-components';

import frLocale from '../i18n/fr.po';
import { createApi } from './api';
import Layout from './container/Layout';
import LabelsContainer from './container/Labels/Labels';

const NotFoundContainer = () => <h1>Not found</h1>;

export default () => {
    addLocale('fr', frLocale);
    useLocale('fr');

    const api = createApi();


    return () => {
        return (<ApiContext.Provider value={api}>
            <div className="App body mod--hidden">
                <Router>
                    <Layout>
                        <Switch>
                            <Route path="/settings/labels" component={LabelsContainer} />
                            <Route component={NotFoundContainer} />
                        </Switch>
                    </Layout>
                </Router>
                <Icons />
            </div>
        </ApiContext.Provider>);
    };
};
