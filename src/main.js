import { h, render } from 'preact';
import App from './App';

import { set } from './config';
import { extend } from './lib/sessionStorage';

const node = document.getElementById('app');

const cb = ({ data: { type, data = {} } = {} }) => {
    if (type === 'init.app' && data.fromApp) {
        extend(data.session);
        set(data.config);
        console.log('[CONFIG]', data);
        render(<App />, node, node.lastChild);
        window.removeEventListener('message', cb, false);
    }
};

window.addEventListener('message', cb, false);

// render(<App />, node, node.lastChild);
