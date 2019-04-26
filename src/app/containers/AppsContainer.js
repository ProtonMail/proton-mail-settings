import React from 'react';
import {
    ProtonMailBridgeSection,
    ProtonMailBetaSection,
    ProtonMailAppsSection,
    ProtonVPNAppsSection,
    ObserverSections
} from 'react-components';

const AppsContainer = () => {
    return (
        <ObserverSections>
            <ProtonMailBridgeSection id="protonmail-bridge" />
            <ProtonMailAppsSection id="protonmail-apps" />
            <ProtonMailBetaSection id="protonmail-beta" />
            <ProtonVPNAppsSection id="protonvpn-apps" />
        </ObserverSections>
    );
};

export default AppsContainer;
