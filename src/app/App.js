import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import { addLocale, useLocale, c } from 'ttag';
import { Icons } from 'react-components';

import frLocale from '../i18n/fr.po';
import Layout from './container/Layout';
import LabelsContainer from './container/Labels/Labels';

const NotFoundContainer = () => <h1>Not found</h1>;

export default () => {
    addLocale('fr', frLocale);
    useLocale('fr');

    return () => {
        return (<div className="App body mod--hidden">
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/settings/labels" component={LabelsContainer} />
                        <Route component={NotFoundContainer} />
                    </Switch>
                </Layout>
            </Router>
            <Icons />
        </div> );
    };
};
