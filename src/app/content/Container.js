import React, { useState } from 'react';
import { Icons, useInstance } from 'react-components';
import { NotificationsProvider, PromptsProvider } from 'react-components';

import createAuthenticationStore from 'proton-shared/lib/authenticationStore';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnAuthenticatedApp';

const Content = () => {
    const authenticationStore = useInstance(() => createAuthenticationStore());
    const [state, setState] = useState(() => ({
        authenticated: authenticationStore.hasSession()
    }));

    const handleLogin = ({ authResult, credentials, userResult }) => {
        const { UID } = authResult;
        const { keyPassword } = credentials;

        authenticationStore.setUID(UID);
        authenticationStore.setPassword(keyPassword);

        setState({
            authenticated: true,
            loginData: {
                userResult,
                EventID: authResult.EventID
            }
        });
    };

    const handleLogout = () => {
        authenticationStore.setUID();
        authenticationStore.setPassword();

        setState({
            authenticated: false
        });
    };

    const content = (() => {
        if (!state.authenticated) {
            return <UnauthenticatedApp onLogin={handleLogin} />;
        }
        return (
            <AuthenticatedApp
                authenticationStore={authenticationStore}
                loginData={state.loginData}
                onLogout={handleLogout}
            />
        );
    })();

    return (
        <div className="App body mod--hidden">
            <NotificationsProvider>
                <PromptsProvider>{content}</PromptsProvider>
            </NotificationsProvider>
            <Icons />
        </div>
    );
};

export default Content;
