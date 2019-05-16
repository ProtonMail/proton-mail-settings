import React from 'react';
import {
    ObserverSections,
    PaymentMethodsSection,
    InvoicesSection,
    PlansSection,
    BillingSection,
    SubscriptionSection
} from 'react-components';

const SubscriptionContainer = () => {
    return (
        <ObserverSections>
            <PlansSection id="plans" />
            <SubscriptionSection id="subscription" />
            <BillingSection id="billing" />
            <PaymentMethodsSection id="payment-methods" />
            <InvoicesSection id="invoices" />
        </ObserverSections>
    );
};

export default SubscriptionContainer;
