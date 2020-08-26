import React from 'react';
import { c } from 'ttag';
import { PrivateMainArea, useAppTitle, OverviewLayout } from 'react-components';

import { getPages } from '../pages';

export const getOverviewPage = () => {
    return {
        text: c('Title').t`Overview`,
        to: '/overview',
        icon: 'apps'
    };
};

const OverviewContainer = () => {
    const pages = getPages().filter(({ to }) => to !== '/overview');
    useAppTitle(c('Title').t`Overview`);

    return (
        <PrivateMainArea className="flex">
            <OverviewLayout pages={pages} title={c('Title').t`Mail settings`} />
        </PrivateMainArea>
    );
};

export default OverviewContainer;
