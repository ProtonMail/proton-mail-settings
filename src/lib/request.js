import { getItem, OAUTH_KEY } from './sessionStorage';
import config from '../config';

const getConfig = () => ({
    credentials: 'include',
    headers: {
        'x-pm-apiversion': config('api_version'),
        'x-pm-appversion': `${config('clientID')}_${config('app_version')}`,
        'x-pm-uid': getItem(OAUTH_KEY + ':UID'),
        Accept: 'application/vnd.protonmail.v1+json'
    }
});

export const getURL = (url, params) => {
    const req = new URL([config('apiUrl')].concat(url).join('/'));
    params && (req.search = new URLSearchParams(params));
    console.log('[REQUEST]', {
        url,
        params,
        formated: [config('apiUrl')].concat(url).join('/'),
        output: req.toString()
    });
    return req;
};

export const loadUser = async () => {
    const uid = getItem(OAUTH_KEY + ':UID');

    const response = await fetch(getURL('users'), {
        credentials: 'include',
        headers: {
            'x-pm-apiversion': config('api_version'),
            'x-pm-appversion': `${config('clientID')}_${config('app_version')}`,
            'x-pm-uid': uid,
            Accept: 'application/vnd.protonmail.v1+json'
        }
    });

    const data = await response.json();

    console.log('--- RESPONSE');
    console.log(data);
};

export async function get(url, { body, ...config }, output = 'json') {
    const response = await fetch(getURL(url, body), {
        ...getConfig(),
        ...config
    });

    return await response[output]();
}
