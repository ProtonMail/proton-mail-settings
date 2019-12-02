import React, { useRef, useEffect } from 'react';
import {
    PaymentMethodsSection,
    InvoicesSection,
    PlansSection,
    BillingSection,
    SubscriptionSection,
    useModals,
    MailBlackFridayModal,
    usePlans,
    SubscriptionModal,
    useSubscription,
    useBlackFriday,
    useUser,
    useApi
} from 'react-components';
import { checkLastCancelledSubscription } from 'react-components/containers/payments/subscription/helpers';
import { c } from 'ttag';
import { PERMISSIONS } from 'proton-shared/lib/constants';

import Page from '../components/Page';

const { UPGRADER, PAID } = PERMISSIONS;

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
        ]
    };
};

const SubscriptionContainer = () => {
    const api = useApi();
    const { createModal } = useModals();
    const [plans, loadingPlans] = usePlans();
    const [subscription] = useSubscription();
    const isBlackFriday = useBlackFriday();
    const checked = useRef(false);
    const [user] = useUser();

    const handleSelect = ({ planIDs = [], cycle, currency, couponCode }) => {
        const plansMap = planIDs.reduce((acc, planID) => {
            const { Name } = plans.find(({ ID }) => ID === planID);
            acc[Name] = 1;
            return acc;
        }, Object.create(null));

        createModal(
            <SubscriptionModal
                plansMap={plansMap}
                customize={false}
                subscription={subscription}
                cycle={cycle}
                currency={currency}
                coupon={couponCode}
            />
        );
    };

    const check = async () => {
        if (await checkLastCancelledSubscription(api)) {
            createModal(<MailBlackFridayModal plans={plans} onSelect={handleSelect} />);
        }
    };

    useEffect(() => {
        if (Array.isArray(plans) && !checked.current && user.isFree && isBlackFriday) {
            check();
            checked.current = true;
        }
    }, [loadingPlans]);

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
