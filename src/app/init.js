import ReactDOM from 'react-dom';
import React from 'react';
import { setConfig } from 'react-hot-loader';
import { createApp } from 'react-components';
import * as config from './config';

const AuthenticatedAppRoutes = React.lazy(() => import('./content/AuthenticatedAppRoutes'));

let UnAuthenticatedAppRoutes = () => {};

if (!PL_IS_STANDALONE) {
    UnAuthenticatedAppRoutes = () => {
        document.location.replace(document.location.origin);
        return 'Redirecting';
    };
}

// usefull for dev/QA, else we don't need it when it's going to be live
if (PL_IS_STANDALONE) {
    UnAuthenticatedAppRoutes = React.lazy(() => import('./content/UnAuthenticatedAppRoutes'));
}

setConfig({
    ignoreSFC: true, // RHL will be __completely__ disabled for SFC
    pureRender: true // RHL will not change render method
});

export default () => {
    const App = createApp(config, AuthenticatedAppRoutes, UnAuthenticatedAppRoutes);
    ReactDOM.render(<App />, document.querySelector('.app-root'));
};
