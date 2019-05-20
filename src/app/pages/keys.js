import { c } from 'ttag';

export const getKeysPage = () => {
    return {
        text: c('Title').t`Keys`,
        route: '/settings/keys',
        sections: [
            {
                text: c('Title').t`Email encryption keys`,
                id: 'addresses'
            },
            {
                text: c('Title').t`Contact encryption keys`,
                id: 'user'
            }
        ]
    };
};
