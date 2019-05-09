import { c } from 'ttag';

export default [
    {
        text: c('Title').t`Subscription`,
        icon: 'alias',
        route: '/settings/subscription',
        sections: [
            {
                text: c('Title').t`Plans & prices`,
                id: 'plans-prices'
            },
            {
                text: c('Title').t`Subscription`,
                id: 'subscription'
            },
            {
                text: c('Title').t`Billing details`,
                id: 'billing'
            },
            {
                text: c('Title').t`Payment methods`,
                id: 'payment-methods'
            },
            {
                text: c('Title').t`Invoices`,
                id: 'invoices'
            }
        ]
    },
    {
        text: c('Title').t`Account`,
        icon: 'account',
        route: '/settings/account',
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
    },
    {
        text: c('Title').t`Organization`,
        icon: 'organization',
        route: '/settings/organization',
        sections: [
            {
                text: c('Title').t`Name`,
                id: 'name'
            },
            {
                text: c('Title').t`Password & key`,
                id: 'password'
            }
        ]
    },
    {
        text: c('Title').t`Users`,
        icon: 'contacts-group-people',
        route: '/settings/members'
    },
    {
        text: c('Title').t`Custom domain`,
        icon: 'domain',
        route: '/settings/domains',
        sections: [
            {
                text: c('Title').t`Custom domain`,
                id: 'domains'
            },
            {
                text: c('Title').t`Catch-all`,
                id: 'catch-all'
            }
        ]
    },
    {
        text: c('Title').t`Addresses`,
        icon: 'email-address',
        route: '/settings/addresses'
    },
    {
        text: c('Title').t`Identity`,
        icon: 'alias',
        route: '/settings/identity',
        sections: [
            {
                text: c('Title').t`Display name & signature`,
                id: 'name-signature'
            },
            {
                text: c('Title').t`Short domain (@pm.me)`,
                id: 'pmme'
            }
        ]
    },
    {
        text: c('Title').t`General`,
        icon: 'alias',
        route: '/settings/general',
        sections: [
            {
                text: c('Title').t`Language`,
                id: 'language'
            },
            {
                text: c('Title').t`Desktop notifications`,
                id: 'desktop-notifications'
            },
            {
                text: c('Title').t`Messages`,
                id: 'messages'
            },
            {
                text: c('Title').t`Contacts`,
                id: 'contacts'
            },
            {
                text: c('Title').t`Search`,
                id: 'search'
            },
            {
                text: c('Title').t`Shortcuts`,
                id: 'shortcuts'
            }
        ]
    },
    {
        text: c('Title').t`Appearance`,
        icon: 'apparence',
        route: '/settings/appearance',
        sections: [
            {
                text: c('Title').t`Layouts`,
                id: 'layouts'
            },
            {
                text: c('Title').t`Toolbars`,
                id: 'toolbars'
            },
            {
                text: c('Title').t`Themes`,
                id: 'themes'
            }
        ]
    },
    {
        text: c('Title').t`Filters`,
        icon: 'filter',
        route: '/settings/filters',
        sections: [
            {
                text: c('Title').t`Custom filters`,
                id: 'custom'
            },
            {
                text: c('Title').t`Spam filters`,
                id: 'spam'
            }
        ]
    },
    {
        text: c('Title').t`Folders/Labels`,
        icon: 'folder-label',
        route: '/settings/labels'
    },
    {
        text: c('Title').t`Auto-reply`,
        icon: 'auto-reply',
        route: '/settings/auto-reply',
        sections: [
            {
                text: c('Title').t`Auto-reply`,
                id: 'auto-reply'
            },
            {
                text: c('Title').t`Related settings`,
                id: 'related-settings'
            }
        ]
    },
    {
        text: c('Title').t`Keys`,
        icon: 'keys',
        route: '/settings/keys',
        sections: [
            {
                text: c('Title').t`Email encryption keys`,
                id: 'addresses'
            },
            {
                text: c('Title').t`Contact encryption keys`,
                id: 'user'
            }
        ]
    },
    {
        text: c('Title').t`Security`,
        icon: 'security',
        route: '/settings/security',
        sections: [
            {
                text: c('Title').t`Session management`,
                id: 'sessions'
            },
            {
                text: c('Title').t`Authentication logs`,
                id: 'logs'
            },
            {
                text: c('Title').t`Address verification`,
                id: 'address-verification'
            },
            {
                text: c('Title').t`External PGP settings`,
                id: 'pgp-settings'
            }
        ]
    },
    {
        text: c('Title').t`Apps`,
        icon: 'alias',
        route: '/settings/apps',
        sections: [
            {
                text: c('Title').t`ProtonMail Bridge`,
                id: 'protonmail-bridge'
            },
            {
                text: c('Title').t`ProtonMail Apps`,
                id: 'protonmail-apps'
            },
            {
                text: c('Title').t`ProtonMail Beta`,
                id: 'protonmail-beta'
            },
            {
                text: c('Title').t`ProtonVPN Apps`,
                id: 'protonvpn-apps'
            }
        ]
    }
];
