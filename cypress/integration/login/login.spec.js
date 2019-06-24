describe('Login example', () => {
    it('Login with 2FA and 2 password mode.', () => {
        cy.autoLogin('free', '2FA2PasswordMode');
    });
});
