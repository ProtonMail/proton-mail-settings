import { c } from 'ttag';

export default [
    {
        text: c('Title').t`Subscription`,
        route: 'subscription',
        sections: [
            {
                text: c('Title').t`Plans & prices`,
                route: 'subscription#plans-prices'
            },
            {
                text: c('Title').t`Payment methods`,
                route: 'subscription#payment-methods'
            },
            {
                text: c('Title').t`Invoices`,
                route: 'subscription#invoices'
            }
        ]
    },
    {
        text: c('Title').t`Organization/users`,
        route: 'organization',
        sections: [
            {
                text: c('Title').t`Name & details`,
                route: 'organization#name'
            },
            {
                text: c('Title').t`Password & key`,
                route: 'organization#password'
            },
            {
                text: c('Title').t`Users`,
                route: 'organization#members'
            }
        ]
    },
    {
        text: c('Title').t`Custom domain`,
        route: 'domains'
    },
    {
        text: c('Title').t`Account`,
        route: 'account',
        sections: [
            {
                text: c('Title').t`Username`,
                route: 'account#username'
            },
            {
                text: c('Title').t`Passwords`,
                route: 'account#passwords'
            },
            {
                text: c('Title').t`Recovery`,
                route: 'account#recovery'
            },
            {
                text: c('Title').t`Notification`,
                route: 'account#notification'
            },
            {
                text: c('Title').t`Email subscriptions`,
                route: 'account#email-subscriptions'
            },
            {
                text: c('Title').t`Delete account`,
                route: 'account#delete'
            }
        ]
    },
    {
        text: c('Title').t`Addresses`,
        route: 'addresses'
    },
    {
        text: c('Title').t`Identity`,
        route: 'identity'
    },
    {
        text: c('Title').t`General`,
        route: 'general',
        sections: [
            {
                text: c('Title').t`Language`,
                route: 'general#language'
            },
            {
                text: c('Title').t`Messages`,
                route: 'general#messages'
            },
            {
                text: c('Title').t`Search`,
                route: 'general#search'
            },
            {
                text: c('Title').t`Shortcuts`,
                route: 'general#shortcuts'
            }
        ]
    },
    {
        text: c('Title').t`Appearance`,
        route: 'appearance',
        sections: [
            {
                text: c('Title').t`Layouts`,
                route: 'appearance#layouts'
            },
            {
                text: c('Title').t`Navigation`,
                route: 'appearance#navigation'
            },
            {
                text: c('Title').t`Toolbar`,
                route: 'appearance#toolbar'
            },
            {
                text: c('Title').t`Theme`,
                route: 'appearance#theme'
            }
        ]
    },
    {
        text: c('Title').t`Filters`,
        route: 'filters',
        sections: [
            {
                text: c('Title').t`Custom filters`,
                route: 'appearance#custom'
            },
            {
                text: c('Title').t`Spam filters`,
                route: 'appearance#spam'
            }
        ]
    },
    {
        text: c('Title').t`Folders/Labels`,
        route: 'folders-labels'
    },
    {
        text: c('Title').t`Keys`,
        route: 'keys',
        sections: [
            {
                text: c('Title').t`Email encryption keys`,
                route: 'keys#addresses'
            },
            {
                text: c('Title').t`Contact encryption keys`,
                route: 'keys#user'
            }
        ]
    },
    {
        text: c('Title').t`Auto-reply`,
        route: 'auto-reply'
    },
    {
        text: c('Title').t`Security`,
        route: 'security',
        sections: [
            {
                text: c('Title').t`Session management`,
                route: 'security#sessions'
            },
            {
                text: c('Title').t`Authentication Logs`,
                route: 'security#logs'
            },
            {
                text: c('Title').t`Address verification`,
                route: 'security#address-verification'
            }
        ]
    }
];
