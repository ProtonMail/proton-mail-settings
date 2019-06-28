export const login = (loginCredentials) => {
    cy.visit('/');
    cy.url().should('include', '/login');
    cy.get('#username').type(loginCredentials.username);
    cy.get('#password').type(loginCredentials.password);
    cy.get('#login_btn').click();

    if (loginCredentials.OTP) {
        cy.task('generateOTP', loginCredentials.OTP).then((token) => {
            cy.get('.TwoFA-input').type(token);
            cy.get('#login_btn_2fa').click();
        });
    }

    if (loginCredentials.secondPassword) {
        cy.get('input[name=mailbox-password]').type(loginCredentials.secondPassword);
        cy.get('#unlock_btn').click();
    }

    cy.get('.atomLoader-text').contains('Decrypting');
    return cy.url().should('include', '/inbox');
};
