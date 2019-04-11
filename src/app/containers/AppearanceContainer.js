import React from 'react';
import { LayoutsSection, ThemesSection, ObserverSections } from 'react-components';

const AppearanceContainer = () => {
    return (
        <ObserverSections>
            <LayoutsSection id="layouts" />
            <ThemesSection id="themes" />
        </ObserverSections>
    );
};

export default AppearanceContainer;
