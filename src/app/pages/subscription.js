import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

const { UPGRADER } = PERMISSIONS;

export const getSubscriptionPage = () => {
    return {
        text: c('Title').t`Subscription`,
        route: '/settings/subscription',
        permissions: [UPGRADER],
        sections: [
            {
                text: c('Title').t`Plans`,
                id: 'plans'
            },
            {
                text: c('Title').t`Subscription`,
                id: 'subscription'
            },
            {
                text: c('Title').t`Billing details`,
                id: 'billing'
            },
            {
                text: c('Title').t`Payment methods`,
                id: 'payment-methods'
            },
            {
                text: c('Title').t`Invoices`,
                id: 'invoices'
            }
        ]
    };
};
