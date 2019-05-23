import { getSubscriptionPage } from './containers/SubscriptionContainer';
import { getAccountPage } from './containers/AccountContainer';
import { getOrganizationPage } from './containers/OrganizationContainer';
import { getMembersPage } from './containers/MembersContainer';
import { getDomainsPage } from './containers/DomainsContainer';
import { getAddressesPage } from './containers/AddressesContainer';
import { getIdentityPage } from './containers/IdentityContainer';
import { getGeneralPage } from './containers/GeneralContainer';
import { getAppearancePage } from './containers/AppearanceContainer';
import { getFiltersPage } from './containers/FiltersContainer';
import { getLabelsPage } from './containers/FoldersLabelsContainer';
import { getKeysPage } from './containers/KeysContainer';
import { getSecurityPage } from './containers/SecurityContainer';
import { getAppsPage } from './containers/AppsContainer';
import { getAutoReply } from './containers/AutoReplyContainer';

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
    getAutoReply(),
    getKeysPage(),
    getSecurityPage(),
    getAppsPage()
];
