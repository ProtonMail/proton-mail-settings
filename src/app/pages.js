import { c } from 'ttag';

export default [
    {
        text: c('Title').t`Subscription`,
        route: '/settings/subscription',
        sections: [
            {
                text: c('Title').t`Plans & prices`,
                route: '/settings/subscription#plans-prices'
            },
            {
                text: c('Title').t`Subscription`,
                route: '/settings/subscription#subscription'
            },
            {
                text: c('Title').t`Billing details`,
                route: '/settings/subscription#billing'
            },
            {
                text: c('Title').t`Payment methods`,
                route: '/settings/subscription#payment-methods'
            },
            {
                text: c('Title').t`Invoices`,
                route: '/settings/subscription#invoices'
            }
        ]
    },
    {
        text: c('Title').t`Account`,
        route: '/settings/account',
        sections: [
            {
                text: c('Title').t`Username`,
                route: '/settings/account#username'
            },
            {
                text: c('Title').t`Passwords`,
                route: '/settings/account#passwords'
            },
            {
                text: c('Title').t`Recovery`,
                route: '/settings/account#recovery'
            },
            {
                text: c('Title').t`Notification`,
                route: '/settings/account#notification'
            },
            {
                text: c('Title').t`Email subscriptions`,
                route: '/settings/account#email-subscriptions'
            },
            {
                text: c('Title').t`Delete account`,
                route: '/settings/account#delete'
            }
        ]
    },
    {
        text: c('Title').t`Organization`,
        route: '/settings/organization',
        sections: [
            {
                text: c('Title').t`Name`,
                route: '/settings/organization#name'
            },
            {
                text: c('Title').t`Password & key`,
                route: '/settings/organization#password'
            }
        ]
    },
    {
        text: c('Title').t`Users`,
        route: '/settings/members'
    },
    {
        text: c('Title').t`Custom domain`,
        route: '/settings/domains',
        sections: [
            {
                text: c('Title').t`Custom domain`,
                route: '/settings/domains'
            },
            {
                text: c('Title').t`Catch-all`,
                route: '/settings/domains#catch-all'
            }
        ]
    },
    {
        text: c('Title').t`Addresses`,
        route: '/settings/addresses',
        sections: [
            {
                text: c('Title').t`Addresses`,
                route: '/settings/addresses'
            }
        ]
    },
    {
        text: c('Title').t`Identity`,
        route: '/settings/identity',
        sections: [
            {
                text: c('Title').t`Display name & signature`,
                route: '/settings/identity#name-signature'
            },
            {
                text: c('Title').t`Short domain (@pm.me)`,
                route: '/settings/identity#pmme'
            }
        ]
    },
    {
        text: c('Title').t`General`,
        route: '/settings/general',
        sections: [
            {
                text: c('Title').t`Language`,
                route: '/settings/general#language'
            },
            {
                text: c('Title').t`Desktop notifications`,
                route: '/settings/general#desktop-notifications'
            },
            {
                text: c('Title').t`Messages`,
                route: '/settings/general#messages'
            },
            {
                text: c('Title').t`Messages`,
                route: '/settings/general#contacts'
            },
            {
                text: c('Title').t`Search`,
                route: '/settings/general#search'
            },
            {
                text: c('Title').t`Shortcuts`,
                route: '/settings/general#shortcuts'
            }
        ]
    },
    {
        text: c('Title').t`Appearance`,
        route: '/settings/appearance',
        sections: [
            {
                text: c('Title').t`Layouts`,
                route: '/settings/appearance#layouts'
            },
            {
                text: c('Title').t`Toolbar`,
                route: '/settings/appearance#toolbar'
            },
            {
                text: c('Title').t`Theme`,
                route: '/settings/appearance#theme'
            }
        ]
    },
    {
        text: c('Title').t`Filters`,
        route: '/settings/filters',
        sections: [
            {
                text: c('Title').t`Custom filters`,
                route: '/settings/appearance#custom'
            },
            {
                text: c('Title').t`Spam filters`,
                route: '/settings/appearance#spam'
            }
        ]
    },
    {
        text: c('Title').t`Folders/Labels`,
        route: '/settings/folders-labels'
    },
    {
        text: c('Title').t`Auto-reply`,
        route: '/settings/auto-reply'
    },
    {
        text: c('Title').t`Keys`,
        route: '/settings/keys',
        sections: [
            {
                text: c('Title').t`Email encryption keys`,
                route: '/settings/keys#addresses'
            },
            {
                text: c('Title').t`Contact encryption keys`,
                route: '/settings/keys#user'
            }
        ]
    },
    {
        text: c('Title').t`Security`,
        route: '/settings/security',
        sections: [
            {
                text: c('Title').t`Session management`,
                route: '/settings/security#sessions'
            },
            {
                text: c('Title').t`Authentication logs`,
                route: '/settings/security#logs'
            },
            {
                text: c('Title').t`Address verification`,
                route: '/settings/security#address-verification'
            },
            {
                text: c('Title').t`External PGP settings`,
                route: '/settings/security#pgp-settings'
            }
        ]
    },
    {
        text: c('Title').t`Apps`,
        route: '/settings/apps',
        sections: [
            {
                text: c('Title').t`ProtonMail apps`,
                route: '/settings/apps#protonmail'
            },
            {
                text: c('Title').t`ProtonMail bridge`,
                route: '/settings/apps#bridge'
            },
            {
                text: c('Title').t`ProtonVPN apps`,
                route: '/settings/apps#protonvpn'
            },
            {
                text: c('Title').t`Beta sign up`,
                route: '/settings/apps#beta'
            }
        ]
    }
];
