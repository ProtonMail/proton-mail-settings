import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { ADMIN, PAID_MAIL } = PERMISSIONS;

export const getDomainsPage = () => {
    return {
        text: c('Title').t`Custom domain`,
        route: '/settings/domains',
        permissions: [ADMIN, PAID_MAIL],
        sections: [
            {
                text: c('Title').t`Custom domain`,
                id: 'domains'
            },
            {
                text: c('Title').t`Catch-all`,
                id: 'catch-all'
            }
        ]
    };
};
