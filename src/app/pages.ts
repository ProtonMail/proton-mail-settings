import { SectionConfig } from 'react-components';
import { FEATURE_FLAGS } from 'proton-shared/lib/constants';

import { getOverviewPage } from './containers/OverviewContainer';
import { getImportPage } from './containers/ImportContainer';
import { getAddressesPage } from './containers/AddressesContainer';
import { getIdentityPage } from './containers/IdentityContainer';
import { getGeneralPage } from './containers/GeneralContainer';
import { getAppearancePage } from './containers/AppearanceContainer';
import { getFiltersPage } from './containers/FiltersContainer';
import { getLabelsPage } from './containers/FoldersLabelsContainer';
import { getSecurityPage } from './containers/SecurityContainer';
import { getAppsPage } from './containers/AppsContainer';
import { getAutoReply } from './containers/AutoReplyContainer';

export const getPages = (): SectionConfig[] => {
    const pages = [
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

    if (FEATURE_FLAGS.includes('mail-import')) {
        pages.splice(2, 0, getImportPage());
    }

    return pages;
};
