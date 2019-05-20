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

// eslint-disable-next-line react/prop-types
const buildSections = ({ route, sections = [] }) => {
    return (
        <ul className="unstyled mt0-5">
            {sections
                .reduce((acc, { text, id }) => {
                    acc.push({ text, id, route: `${route}#${id}` });
                    return acc;
                }, [])
                .map(({ text, id, route }) => {
                    return (
                        <li key={id}>
                            <Link to={route}>{text}</Link>
                        </li>
                    );
                })}
        </ul>
    );
};

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
