import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { PAID_MAIL } = PERMISSIONS;

export const getAppsPage = () => {
    return {
        text: c('Title').t`Apps`,
        route: '/settings/apps',
        sections: [
            {
                text: c('Title').t`ProtonMail Bridge`,
                id: 'protonmail-bridge',
                permissions: [PAID_MAIL]
            },
            {
                text: c('Title').t`ProtonMail Apps`,
                id: 'protonmail-apps'
            },
            {
                text: c('Title').t`ProtonMail Beta`,
                id: 'protonmail-beta'
            },
            {
                text: c('Title').t`ProtonVPN Apps`,
                id: 'protonvpn-apps'
            }
        ]
    };
};
