import React from 'react';
import { LayoutsSection, ThemesSection, ToolbarsSection } from 'react-components';
import { c } from 'ttag';

import Page from '../components/Page';

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

const AppearanceContainer = () => {
    return (
        <Page config={getAppearancePage()}>
            <LayoutsSection />
            <ToolbarsSection />
            <ThemesSection />
        </Page>
    );
};

export default AppearanceContainer;
