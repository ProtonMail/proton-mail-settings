import { getItem, OAUTH_KEY } from './sessionStorage';

export const loadUser = async () => {
    const uid = getItem(OAUTH_KEY + ':UID');
    console.log('UID', uid);

    const response = await fetch('https://protonmail.blue/api/users', {
        credentials: 'include',
        headers: {
            'x-pm-apiversion': '3',
            'x-pm-appversion': 'Web_3.15.16',
            'x-pm-uid': uid || '36d76fcc9c1519f48e8f9115877ae5543cb00144',
            Accept: 'application/vnd.protonmail.v1+json'
        }
    });

    const data = await response.json();

    console.log('--- RESPONSE');
    console.log(data);
};
