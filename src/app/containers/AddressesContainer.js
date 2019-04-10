import React from 'react';
import { AddressesSection, ObserverSections } from 'react-components';

import RelatedSettingsAddresses from '../components/addresses/RelatedSettingsAddresses';

const AddressesContainer = () => {
    return (
        <ObserverSections>
            <AddressesSection id="addresses" />
            <RelatedSettingsAddresses id="related-settings" />
        </ObserverSections>
    );
};

export default AddressesContainer;
