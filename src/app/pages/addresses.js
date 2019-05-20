import { c } from 'ttag';

export const getAddressesPage = () => {
    return {
        text: c('Title').t`Addresses`,
        route: '/settings/addresses'
    };
};
