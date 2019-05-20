import { c } from 'ttag';

export const getAppearancePage = () => {
    return {
        text: c('Title').t`Appearance`,
        route: '/settings/appearance',
        sections: [
            {
                text: c('Title').t`Layouts`,
                id: 'layouts'
            },
            {
                text: c('Title').t`Toolbars`,
                id: 'toolbars'
            },
            {
                text: c('Title').t`Themes`,
                id: 'themes'
            }
        ]
    };
};
