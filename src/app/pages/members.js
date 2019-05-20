import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { ADMIN, MULTI_USERS } = PERMISSIONS;

export const getMembersPage = () => {
    return {
        text: c('Title').t`Users`,
        route: '/settings/members',
        permissions: [ADMIN, MULTI_USERS]
    };
};
