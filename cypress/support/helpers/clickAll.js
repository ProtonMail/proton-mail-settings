export const clickAll = (selectors) => {
    selectors.forEach((selector) => {
        cy.get(selector).click();
    });
};
