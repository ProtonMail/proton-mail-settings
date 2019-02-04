import { getItem, OAUTH_KEY } from './sessionStorage';
import config from '../config';

const getConfig = (method) => ({
    method,
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

const factory = (method) => {
    return async (url, { queryParams, ...config } = {}, output = 'json') => {
        console.log('[REQUEST]', {
            url: getURL(url, queryParams),
            config: {
                ...getConfig(method),
                ...config
            },
            output
        });
        const response = await fetch(getURL(url, queryParams), {
            ...getConfig(method),
            ...config
        });

        return await response[output]();
    };
};

export const get = factory();
export const post = factory('POST');
