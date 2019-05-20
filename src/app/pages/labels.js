import { c } from 'ttag';

export const getLabelsPage = () => {
    return {
        text: c('Title').t`Folders/Labels`,
        route: '/settings/labels'
    };
};
