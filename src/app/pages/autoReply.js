import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { PAID_MAIL } = PERMISSIONS;

export const getAutoReply = () => {
    return {
        text: c('Title').t`Auto-reply`,
        route: '/settings/auto-reply',
        permissions: [PAID_MAIL]
    };
};
