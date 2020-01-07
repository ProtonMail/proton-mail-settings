import React from 'react';
import {
    PaymentMethodsSection,
    InvoicesSection,
    PlansSection,
    BillingSection,
    SubscriptionSection,
    useUser
} from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { UPGRADER, PAID } = PERMISSIONS;

export const getSubscriptionPage = (user = {}) => {
    return {
        text: c('Title').t`Subscription`,
        route: '/settings/subscription',
        icon: 'dashboard',
        permissions: [UPGRADER],
        sections: [
            !user.isPaid && {
                text: c('Title').t`Plans`,
                id: 'plans'
            },
            {
                text: c('Title').t`Subscription`,
                id: 'subscription',
                permissions: [PAID]
            },
            {
                text: c('Title').t`Billing details`,
                id: 'billing',
                permissions: [PAID]
            },
            {
                text: c('Title').t`Payment methods`,
                id: 'payment-methods'
            },
            {
                text: c('Title').t`Invoices`,
                id: 'invoices'
            }
        ].filter(Boolean)
    };
};

const SubscriptionContainer = () => {
    const [user, loadingUser] = useUser();
    if (loadingUser) {
        return null;
    }
    if (user.isPaid) {
        return (
            <Page config={getSubscriptionPage(user)}>
                <SubscriptionSection />
                <BillingSection />
                <PaymentMethodsSection />
                <InvoicesSection />
            </Page>
        );
    }
    return (
        <Page config={getSubscriptionPage(user)}>
            <PlansSection />
            <SubscriptionSection />
            <BillingSection />
            <PaymentMethodsSection />
            <InvoicesSection />
        </Page>
    );
};

export default SubscriptionContainer;
