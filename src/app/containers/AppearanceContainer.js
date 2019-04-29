import React from 'react';
import { LayoutsSection, ThemesSection, ObserverSections, ToolbarsSection } from 'react-components';

const AppearanceContainer = () => {
    return (
        <ObserverSections>
            <LayoutsSection id="layouts" />
            <ToolbarsSection id="toolbars" />
            <ThemesSection id="themes" />
        </ObserverSections>
    );
};

export default AppearanceContainer;
