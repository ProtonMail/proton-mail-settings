import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { StandardPublicApp, LoginForm, SignupContainer } from 'react-components';
import PlansTable from 'react-components/containers/payments/PlansTable';

import locales from '../locales';
import PublicLayout from '../components/layout/PublicLayout';

// TODO: stopRedirect needed?
const PublicApp = ({ onLogin }) => {
    return (
        <StandardPublicApp locales={locales}>
            <PublicLayout>
                <Switch>
                    <Route
                        path="/signup/:step?"
                        render={({ history, match }) => (
                            <SignupContainer
                                stopRedirect={() => {}}
                                history={history}
                                match={match}
                                onLogin={onLogin}
                                renderPlansTable={(props) => <PlansTable onSelect={() => {}} {...props} />}
                            />
                        )}
                    />
                    <Route render={() => <LoginForm onLogin={onLogin} />} />
                </Switch>
            </PublicLayout>
        </StandardPublicApp>
    );
};

PublicApp.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default PublicApp;
