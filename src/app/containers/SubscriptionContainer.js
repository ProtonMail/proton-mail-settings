import React from 'react';
import {
    PaymentMethodsSection,
    InvoicesSection,
    PlansSection,
    BillingSection,
    SubscriptionSection
} from 'react-components';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { UPGRADER } = PERMISSIONS;

export const getSubscriptionPage = () => {
    return {
        text: c('Title').t`Subscription`,
        route: '/settings/subscription',
        icon: 'dashboard',
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

const SubscriptionContainer = () => {
    return (
        <Page config={getSubscriptionPage()}>
            <PlansSection />
            <SubscriptionSection />
            <BillingSection />
            <PaymentMethodsSection />
            <InvoicesSection />
        </Page>
    );
};

export default SubscriptionContainer;
