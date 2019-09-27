export const logout = () => {
    cy.get('[data-cy-header="userDropdown"]').click();
    cy.get('[data-cy-header-user-dropdown="logout"]').click();
    return cy.get('[data-cy-login="username"]').should('exist');
};
