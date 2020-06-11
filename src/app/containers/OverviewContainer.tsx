import React from 'react';
import { c } from 'ttag';
import {
    Loader,
    IndexSection,
    SummarySection,
    PromoteSection,
    useSubscription,
    useUser,
    useUserSettings,
    PrivateMainArea,
    useAppTitle
} from 'react-components';

import { getPages } from '../pages';

const OverviewContainer = () => {
    const [subscription, loading] = useSubscription();
    const [userSettings] = useUserSettings();
    const [user] = useUser();

    useAppTitle(c('Title').t`Overview`, 'ProtonMail');

    if (loading) {
        return (
            <PrivateMainArea>
                <Loader />
            </PrivateMainArea>
        );
    }

    return (
        <PrivateMainArea className="p2">
            <div className="flex-autogrid onmobile-flex-column">
                <div className="flex-item-fluid flex-autogrid-item flex">
                    <SummarySection subscription={subscription} user={user} userSettings={userSettings} />
                </div>
                <div className="flex-item-fluid flex-autogrid-item flex">
                    <PromoteSection user={user} />
                </div>
            </div>
            <IndexSection pages={getPages(user)} />
        </PrivateMainArea>
    );
};

export default OverviewContainer;
