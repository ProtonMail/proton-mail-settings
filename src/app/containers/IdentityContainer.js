import React from 'react';
import { ObserverSections, IdentitySection, PmMeSection } from 'react-components';

const IdentityContainer = () => {
    return (
        <ObserverSections>
            <IdentitySection id="name-signature" />
            <PmMeSection id="pmme" />
        </ObserverSections>
    );
};

export default IdentityContainer;
