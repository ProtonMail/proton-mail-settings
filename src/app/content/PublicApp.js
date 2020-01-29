import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { StandardPublicApp, LoginForm } from 'react-components';

import PublicLayout from '../components/layout/PublicLayout';

const PublicApp = ({ onLogin }) => {
    return (
        <StandardPublicApp>
            <PublicLayout>
                <Switch>
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
