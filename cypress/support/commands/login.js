export const login = ({ username, password, OTP, secondPassword }) => {
    cy.visit('/');
    cy.get('[data-cy-login="username"]').type(username);
    cy.get('[data-cy-login="password"]').type(password);
    cy.get('[data-cy-login="submit"]').click();

    if (OTP) {
        cy.task('generateOTP', OTP).then((token) => {
            cy.get('[data-cy-login="TOTP"]').type(token);
            cy.get('[data-cy-login="submit TOTP"]').click();
        });
    }

    if (secondPassword) {
        cy.get('[data-cy-login="mailbox password"]').type(secondPassword);
        cy.get('[data-cy-login="submit mailbox password"]').click();
    }
    return cy.queryByText(username).should('exist');
};
