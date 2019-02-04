import '../App.scss';

window.postMessage({
    type: 'create.form',
    data: {
        name: 'bottom',
        config: [
            {
                component: 'email',
                label: 'Add a recovery email',
                placeholder: 'Recovery Email',
                type: 'email',
                name: 'notificationEmail'
            },
            {
                component: 'signupSubmit',
                messages: {
                    agreeLabel: 'By clicking Create Account, you agree to abide by',
                    agreeLink: "ProtonMail's Terms and Conditions",
                    alreadyUser: 'Already have an account?'
                },
                button: {
                    label: 'Create Account'
                }
            }
        ]
    }
});

window.postMessage({
    type: 'create.form',
    data: {
        name: 'top',
        config: [
            {
                component: 'username',
                label: 'Choose a username',
                placeholder: 'Jean Valjean',
                maxlength: 10,
                minlength: 3,
                required: true,
                name: 'username',
                api: {
                    url: 'https://protonmail.blue/api/users/available',
                    headers: {
                        'x-pm-apiversion': 3,
                        'x-pm-appversion': 'Web_3.15.13'
                    }
                },
                domains: {
                    component: 'domains',
                    label: 'Select a domain',
                    name: 'domain',
                    options: [
                        {
                            selected: true,
                            value: 'protonmail.com'
                        },
                        {
                            value: 'protonmail.ch'
                        }
                    ]
                }
            }
        ]
    }
});
