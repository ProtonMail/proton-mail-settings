import { getAppsPage } from './apps';
import { getSubscriptionPage } from './subscription';
import { getAccountPage } from './account';
import { getOrganizationPage } from './organization';
import { getMembersPage } from './members';
import { getDomainsPage } from './domains';
import { getAddressesPage } from './addresses';
import { getIdentityPage } from './identity';
import { getGeneralPage } from './general';
import { getAppearancePage } from './appearance';
import { getFiltersPage } from './filters';
import { getLabelsPage } from './labels';
import { getKeysPage } from './keys';
import { getSecurityPage } from './security';

export const getPages = () => [
    getSubscriptionPage(),
    getAccountPage(),
    getOrganizationPage(),
    getMembersPage(),
    getDomainsPage(),
    getAddressesPage(),
    getIdentityPage(),
    getGeneralPage(),
    getAppearancePage(),
    getFiltersPage(),
    getLabelsPage(),
    getFiltersPage(),
    getKeysPage(),
    getSecurityPage(),
    getAppsPage()
];
