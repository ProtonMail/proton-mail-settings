import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GenericError, Loader, LoginForm, ModalsChildren } from 'react-components';
import { loadOpenPGP } from 'proton-shared/lib/openpgp';
import { loadLocale, getBrowserLocale } from 'proton-shared/lib/i18n';

import locales from '../locales';
import PublicLayout from '../components/layout/PublicLayout';

const PublicApp = ({ onLogin }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useLayoutEffect(() => {
        (async () => {
            await Promise.all([loadOpenPGP(), loadLocale(getBrowserLocale(), locales)]);
        })()
            .then(() => setLoading(false))
            .catch(() => setError(true));
    }, []);

    if (error) {
        return <GenericError />;
    }

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <ModalsChildren />
            <PublicLayout>
                <Router>
                    <Switch>
                        <Route render={() => <LoginForm onLogin={onLogin} />} />
                    </Switch>
                </Router>
            </PublicLayout>
        </>
    );
};

PublicApp.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default PublicApp;
