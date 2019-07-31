import React from 'react';
import {
    Loader,
    IndexSection,
    SummarySection,
    PromoteSection,
    useSubscription,
    useUser,
    useUserSettings
} from 'react-components';

import { getPages } from '../pages';
import Main from '../components/Main';

const OverviewContainer = () => {
    const [subscription, loading] = useSubscription();
    const [userSettings] = useUserSettings();
    const [user] = useUser();

    if (loading) {
        return <Loader />;
    }

    return (
        <Main className="p2">
            <div className="flex-autogrid onmobile-flex-column">
                <div className="flex-item-fluid flex-autogrid-item flex">
                    <SummarySection subscription={subscription} user={user} userSettings={userSettings} />
                </div>
                <div className="flex-item-fluid flex-autogrid-item flex">
                    <PromoteSection subscription={subscription} user={user} />
                </div>
            </div>
            <IndexSection pages={getPages()} subscription={subscription} user={user} />
        </Main>
    );
};

export default OverviewContainer;
