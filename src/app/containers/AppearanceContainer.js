import React from 'react';
import PropTypes from 'prop-types';
import { LayoutsSection, ThemesSection, ToolbarsSection } from 'react-components';
import { c } from 'ttag';

import Page from '../components/Page';

export const getAppearancePage = () => {
    return {
        text: c('Title').t`Appearance`,
        route: '/settings/appearance',
        icon: 'apparence',
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

const AppearanceContainer = ({ setActiveSection }) => {
    return (
        <Page config={getAppearancePage()} setActiveSection={setActiveSection}>
            <LayoutsSection />
            <ToolbarsSection />
            <ThemesSection />
        </Page>
    );
};

AppearanceContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default AppearanceContainer;
