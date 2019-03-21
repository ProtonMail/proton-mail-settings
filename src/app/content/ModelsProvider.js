import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserProvider, UserContext } from 'react-components/models/userModel';
import { UserSettingsProvider, UserSettingsContext } from 'react-components/models/userSettingsModel';
import { AddressesProvider, AddressesContext } from 'react-components/models/addressesModel';
import { OrganizationProvider, OrganizationContext } from 'react-components/models/organizationModel';
import { SubscriptionProvider, SubscriptionContext } from 'react-components/models/subscriptionModel';
import { MembersProvider, MembersContext } from 'react-components/models/membersModel';
import { DomainsProvider } from 'react-components/models/domainsModel';

import { nestChildren } from 'react-components/helpers/component';

const InitSession = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [initialUser, loadUser] = useContext(UserContext);
    const [, loadUserSettings] = useContext(UserSettingsContext);
    const [, loadAddresses] = useContext(AddressesContext);
    const [, loadOrganization] = useContext(OrganizationContext);
    const [, loadSubscription] = useContext(SubscriptionContext);
    const [, loadMembers] = useContext(MembersContext);

    const initLoad = async () => {
        const [user] = await Promise.all([
            initialUser.initialized ? initialUser.data : loadUser(),
            loadUserSettings(),
            loadAddresses()
        ]).catch((e) => {
            // TODO: Handle failure.
            throw e;
        });

        if (user.isFree) {
            return setLoading(false);
        }

        await Promise.all([loadOrganization(), loadSubscription(), loadMembers()]);

        setLoading(false);
    };

    useEffect(() => {
        initLoad();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return children;
};

const ModelsProvider = ({ children, userResult }) => {
    return nestChildren(
        [
            <UserProvider key={0} initialValue={userResult} />,
            <UserSettingsProvider key={1} />,
            <OrganizationProvider key={2} />,
            <DomainsProvider key={3} />,
            <MembersProvider key={4} />,
            <SubscriptionProvider key={5} />,
            <AddressesProvider key={6} />,
            <InitSession key={7} />
        ],
        children
    );
};

ModelsProvider.propTypes = {
    children: PropTypes.node.isRequired,
    userResult: PropTypes.object
};

export default ModelsProvider;
