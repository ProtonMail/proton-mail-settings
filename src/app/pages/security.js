import { c } from 'ttag';

export const getSecurityPage = () => {
    return {
        text: c('Title').t`Security`,
        route: '/settings/security',
        sections: [
            {
                text: c('Title').t`Session management`,
                id: 'sessions'
            },
            {
                text: c('Title').t`Authentication logs`,
                id: 'logs'
            },
            {
                text: c('Title').t`Address verification`,
                id: 'address-verification'
            },
            {
                text: c('Title').t`External PGP settings`,
                id: 'pgp-settings'
            }
        ]
    };
};
