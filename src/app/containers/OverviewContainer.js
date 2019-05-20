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

import pages from '../pages';

const OverviewContainer = () => {
    const [subscription, loading] = useSubscription();
    const [userSettings] = useUserSettings();
    const [user] = useUser();

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="flex-autogrid">
                <div className="flex-autogrid-item">
                    <SummarySection subscription={subscription} user={user} userSettings={userSettings} />
                </div>
                <div className="flex-autogrid-item">
                    <PromoteSection subscription={subscription} user={user} />
                </div>
            </div>
            <IndexSection pages={pages} subscription={subscription} user={user} />
        </>
    );
};

export default OverviewContainer;
