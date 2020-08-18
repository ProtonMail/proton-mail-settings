import { SectionConfig } from 'react-components';

import { getOverviewPage } from './containers/OverviewContainer';
import { getAddressesPage } from './containers/AddressesContainer';
import { getIdentityPage } from './containers/IdentityContainer';
import { getGeneralPage } from './containers/GeneralContainer';
import { getAppearancePage } from './containers/AppearanceContainer';
import { getFiltersPage } from './containers/FiltersContainer';
import { getLabelsPage } from './containers/FoldersLabelsContainer';
import { getSecurityPage } from './containers/SecurityContainer';
import { getAppsPage } from './containers/AppsContainer';
import { getAutoReply } from './containers/AutoReplyContainer';

export const getPages = (): SectionConfig[] => [
    getOverviewPage(),
    getGeneralPage(),
    getAddressesPage(),
    getIdentityPage(),
    getAppearancePage(),
    getLabelsPage(),
    getFiltersPage(),
    getAutoReply(),
    getSecurityPage(),
    getAppsPage()
];
