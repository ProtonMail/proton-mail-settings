import { h, render } from 'preact';
import { decryptPrivateKey, encryptPrivateKey } from 'pmcrypto';

import App from './App';
import { set } from './config';
import { extend, getPassword } from './lib/sessionStorage';
import loadOpenPGP from './setupOpenPGP';
import bridge from './lib/bridge';

const node = document.getElementById('app');

loadOpenPGP();

async function exportPrivateKey({ PrivateKey, email }) {
    const pk = await decryptPrivateKey(PrivateKey, getPassword());
    const armor = await encryptPrivateKey(pk, 'monique de test');

    const blob = new Blob([armor], { type: 'data:text/plain;charset=utf-8;' });
    const fileName = `privatekey.${email}.asc`;
    bridge('keys/export/download', (i) => i)({
        blob,
        fileName
    });
}

const cb = ({ data: { type, data = {} } = {} }) => {
    if (type === 'init.app' && data.fromApp) {
        extend(data.session);
        set(data.config);
        console.log('[CONFIG]', data);
        render(<App />, node, node.lastChild);
        // window.removeEventListener('message', cb, false);
    }

    if (type === 'export.key' && data.fromApp) {
        console.log('[CONFIG key]', data);
        exportPrivateKey(data);
    }
};

window.addEventListener('message', cb, false);

// render(<App />, node, node.lastChild);
