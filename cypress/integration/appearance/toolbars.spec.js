import * as notification from '../../support/helpers/notification';
import { clickAll as setDefault } from '../../support/helpers/clickAll';

const selectors = {
    readUnread: '[data-cy-appearance-toolbar="read-unread"]',
    unreadRead: '[data-cy-appearance-toolbar="unread-read"]'
};

// it's possible to have multiple notifications with the same text.
// This is makes it hard to distinguish the origin for each notification.
const waitForFadeout = true;

describe('Read/unread toolbar buttons', () => {
    before(() => {
        cy.autoLogin('free');
        cy.visit('/appearance');
        cy.url().should('include', '/appearance');
        setDefault([selectors.unreadRead]);
    });

    it('Set toolbar to read-unread', () => {
        cy.get(selectors.readUnread).click();
        notification.hasText('Buttons position saved', waitForFadeout);
    });

    it('Set toolbar to unread-read', () => {
        cy.get(selectors.unreadRead).click();
        notification.hasText('Buttons position saved'); //Last test, don't need to wait for fadeout.
    });
});
