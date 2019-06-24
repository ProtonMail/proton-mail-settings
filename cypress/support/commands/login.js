const login = (username, password, OTP = null, secondPassword = null) => {
    cy.visit('/');
    cy.url().should('include', '/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login_btn').click();

    if (OTP !== null) {
        cy.task('generateOTP', OTP).then((token) => {
            cy.get('.TwoFA-input').type(token);
            cy.get('#login_btn_2fa').click();
        });
    }

    if (secondPassword !== null) {
        cy.get('input[name=mailbox-password]').type(secondPassword);
        cy.get('#unlock_btn').click();
    }

    cy.get('.atomLoader-text').contains('Decrypting');
    return cy.url().should('include', '/inbox');
};

module.exports.login = login;
