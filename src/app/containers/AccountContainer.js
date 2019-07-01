import React from 'react';
import { UsernameSection, PasswordsSection, NewsSection, DeleteSection, EmailSection } from 'react-components';
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
                id: '2fa'
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
            <EmailSection />
            <NewsSection />
            <DeleteSection />
        </Page>
    );
};

export default AccountContainer;
