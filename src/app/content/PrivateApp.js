import React from 'react';
import PropTypes from 'prop-types';
import { StandardPrivateApp } from 'react-components';
import {
    UserModel,
    MailSettingsModel,
    UserSettingsModel,
    DomainsModel,
    AddressesModel,
    LabelsModel,
    FiltersModel,
    OrganizationModel,
    MembersModel,
    SubscriptionModel
} from 'proton-shared/lib/models';

import PrivateLayout from '../components/layout/PrivateLayout';

const EVENT_MODELS = [
    UserModel,
    MailSettingsModel,
    UserSettingsModel,
    AddressesModel,
    DomainsModel,
    LabelsModel,
    FiltersModel,
    SubscriptionModel,
    OrganizationModel,
    MembersModel
];

const PRELOAD_MODELS = [UserSettingsModel, UserModel, MailSettingsModel];

const PrivateApp = ({ onLogout }) => {
    return (
        <StandardPrivateApp onLogout={onLogout} preloadModels={PRELOAD_MODELS} eventModels={EVENT_MODELS}>
            <PrivateLayout />
        </StandardPrivateApp>
    );
};

PrivateApp.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default PrivateApp;
