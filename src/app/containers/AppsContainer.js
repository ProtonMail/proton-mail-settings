import React from 'react';
import {
    ProtonMailBridgeSection,
    ProtonVPNAppsSection,
    ProtonMailBetaSection,
    ProtonMailAppsSection
} from 'react-components';

import Page from '../components/Page';
import { getAppsPage } from '../pages/apps';

const COMPONENTS = {
    'protonmail-bridge': ProtonMailBridgeSection,
    'protonmail-apps': ProtonVPNAppsSection,
    'protonmail-beta': ProtonMailBetaSection,
    'protonvpn-apps': ProtonMailAppsSection
};

const AppsContainer = () => <Page page={getAppsPage()} components={COMPONENTS} />;

export default AppsContainer;
