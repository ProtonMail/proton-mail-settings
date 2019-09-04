import React from 'react';
import {
    UsernameSection,
    PasswordsSection,
    NewsSection,
    DeleteSection,
    EmailSection,
    TwoFactorSection
} from 'react-components';
import { c } from 'ttag';

import Page from '../components/Page';

export const getAccountPage = () => {
    return {
        text: c('Title').t`Account`,
        route: '/settings/account',
        icon: 'account',
        sections: [
            {
                text: c('Title').t`Username`,
                id: 'username'
            },
            {
                text: c('Title').t`Passwords`,
                id: 'passwords'
            },
            {
                text: c('Title').t`Two factor authentication`,
                id: 'two-fa'
            },
            {
                text: c('Title').t`Recovery & notification`,
                id: 'email'
            },
            {
                text: c('Title').t`Email subscriptions`,
                id: 'news'
            },
            {
                text: c('Title').t`Delete account`,
                id: 'delete'
            }
        ]
    };
};

const AccountContainer = () => {
    return (
        <Page config={getAccountPage()}>
            <UsernameSection />
            <PasswordsSection />
            <TwoFactorSection />
            <EmailSection />
            <NewsSection />
            <DeleteSection />
        </Page>
    );
};

export default AccountContainer;
