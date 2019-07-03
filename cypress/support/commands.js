// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { login } from './commands/login';
import { PLANS, PASSWORD_MODE } from '../fixtures/accountTypes.js';
const users = require('../fixtures/accounts.json');

/**
 * [Will perform login using one of the predefined test accounts.]
 * @param  {String} [plan="free"] [The type of the account. Ex: free, visionary, etc.]
 * @param  {String} [passwordMode="regular"] [The password mode. Can be: regular, 2FA, 2PasswordMode or 2FA2PasswordMode.]
 */
Cypress.Commands.add('autoLogin', (plan = PLANS.free, passwordMode = PASSWORD_MODE.regular) => {
    if (plan === PLANS.free && passwordMode === PASSWORD_MODE.twoFactorTwoPasswordMode) {
        return login({
            username: users.FREE_TWOFACTOR_TWOPASSWORD_MODE.username,
            password: users.FREE_TWOFACTOR_TWOPASSWORD_MODE.password,
            OTP: users.FREE_TWOFACTOR_TWOPASSWORD_MODE.OTP,
            secondPassword: users.FREE_TWOFACTOR_TWOPASSWORD_MODE.secondPassword
        });
    }
    return login({
        username: users.FREE.username,
        password: users.FREE.password
    });
});

/**
 * [Login command]
 * @param  {Object} loginCredentials [The login credentials for the user.]
 * @param  {String} loginCredentials.username [The username.]
 * @param  {String} loginCredentials.password [The password.]
 * @param  {String} loginCredentials.OTP [The secret for the OTP(one time password) token.]
 * @param  {String} loginCredentials.secondPassword [The mailbox password.]
 */
Cypress.Commands.add('login', (loginCredentials) => {
    return login(loginCredentials);
});
