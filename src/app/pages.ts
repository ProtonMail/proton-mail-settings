import { c } from 'ttag';
import { SectionConfig } from 'react-components';
import { FEATURE_FLAGS } from 'proton-shared/lib/constants';
import { UserModel } from 'proton-shared/lib/interfaces';

import { getImportPage } from './containers/ImportContainer';
import { getAddressesPage } from './containers/AddressesContainer';
import { getIdentityPage } from './containers/IdentityContainer';
import { getGeneralPage } from './containers/GeneralContainer';
import { getAppearancePage } from './containers/AppearanceContainer';
import { getFiltersPage } from './containers/FiltersContainer';
import { getLabelsPage } from './containers/FoldersLabelsContainer';
import { getSecurityPage } from './containers/SecurityContainer';
import { getAppsPage } from './containers/AppsContainer';
import { getBridgePage } from './containers/BridgeContainer';
import { getAutoReply } from './containers/AutoReplyContainer';

export const getOverviewPage = () => {
    return {
        text: c('Title').t`Overview`,
        to: '/overview',
        icon: 'apps',
    };
};

export const getPages = (user: UserModel): SectionConfig[] => {
    const pages = [
        getOverviewPage(),
        getGeneralPage(),
        getAddressesPage(user),
        getIdentityPage(),
        getAppearancePage(),
        getLabelsPage(),
        getFiltersPage(),
        getAutoReply(),
        getSecurityPage(),
        getAppsPage(),
        getBridgePage(),
    ];

    if (FEATURE_FLAGS.includes('mail-import')) {
        pages.splice(2, 0, getImportPage());
    }

    return pages;
};
