import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { ADMIN } = PERMISSIONS;

export const getOrganizationPage = () => {
    return {
        text: c('Title').t`Organization`,
        route: '/settings/organization',
        permissions: [ADMIN],
        sections: [
            {
                text: c('Title').t`Name`,
                id: 'name'
            },
            {
                text: c('Title').t`Password & key`,
                id: 'password'
            }
        ]
    };
};
