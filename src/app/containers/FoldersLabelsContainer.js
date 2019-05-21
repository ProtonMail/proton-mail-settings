import React from 'react';
import { c } from 'ttag';

import Page from '../components/Page';

export const getLabelsPage = () => {
    return {
        text: c('Title').t`Folders/labels`,
        route: '/settings/labels'
    };
};

const FoldersLabelsContainer = () => {
    return <Page config={getLabelsPage()} />;
};

export default FoldersLabelsContainer;
