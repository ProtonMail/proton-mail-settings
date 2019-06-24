// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { login } from './commands/login.js';

//Setup user data
let users = require('../fixtures/accounts.json');
let accountTypes = require('../fixtures/accountTypes.json');

/**
 * [Will perform login using one of the predefined test accounts.]
 * @param  {[String]} [type="free"] [The type of the account. Ex: free, visionary, etc.]
 * @param  {[String]} [mode="regular"] [The password mode. Can be: regular, 2FA, 2PasswordMode or 2FA2PasswordMode.]
 */
Cypress.Commands.add('autoLogin', (type = accountTypes.type.free, mode = accountTypes.passwordMode.regular) => {
    if (type == accountTypes.type.free && mode == accountTypes.passwordMode.twoFactorTwoPasswordMode) {
        return login(users.user2.username, users.user2.password, users.user2.OTP, users.user2.secondPassword);
    }
    return login(users.user1.username, users.user1.password);
});

/**
 * [Login command]
 * @param  {[String]} username [The username.]
 * @param  {[String]} password [The password.]
 * @param  {[String]} [OTP=null] [The secret for the OTP(one time password) token.]
 * @param  {[String]} [secondPassword=null] [The mailbox password.]
 */
Cypress.Commands.add('login', (username, password, OTP = null, secondPassword = null) => {
    return login(username, password, OTP, secondPassword);
});
