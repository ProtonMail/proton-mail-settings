const selector = '[data-cy=notifications-container]';

/*
 *   The fadeIn / fadeOut animations last for 1 second.
 *   The notification is displayed for ~2 seconds before the fadeOut starts.
 */
export const hasText = (notificationText, waitForAnimation) => {
    cy.wait(1000); // The fadeIn animation
    cy.get(selector).should('be.visible');
    cy.get(selector)
        .children()
        .last()
        .should('contain.text', notificationText)
        .and('be.visible');

    if (waitForAnimation) {
        return cy.get(selector).should('be.hidden');
    }
};

//Multiple notifications can be shown at once.
export const count = (expected = 0) => {
    return cy
        .get(selector)
        .children()
        .should('have.length', expected);
};

export const notificationContainerIsVisible = () => {
    return cy.get(selector).should('be.visible');
};
