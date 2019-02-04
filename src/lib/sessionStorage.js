export const OAUTH_KEY = 'proton:oauth';
const MAILBOX_PASSWORD_KEY = 'proton:mailbox_pwd';

const storage = window.sessionStorage;

const whitelist = [
    MAILBOX_PASSWORD_KEY,
    OAUTH_KEY + ':SessionToken',
    OAUTH_KEY + ':UID',
    'proton:decrypted_token',
    'proton:encrypted_password'
];

const CACHE = {};

// storage.clear();

export const extend = (data) => {
    Object.assign(CACHE, data);
};

export const getItem = (key) => {
    if (typeof key === 'string' && CACHE.hasOwnProperty(key)) {
        return CACHE[key];
    }
};

export const setItem = (key, value) => {
    if (typeof key === 'string' && typeof value === 'string') {
        CACHE[key] = value;
    }
};

export const removeItem = (key) => {
    if (typeof key === 'string' && CACHE.hasOwnProperty(key)) {
        delete CACHE[key];
    }
};

export const clear = () => {
    Object.keys(CACHE).forEach((key) => {
        delete CACHE[key];
    });
};
