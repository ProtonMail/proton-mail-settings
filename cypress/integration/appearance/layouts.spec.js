import * as notification from '../../support/helpers/notification';
import { clickAll } from '../../support/helpers/clickAll';

const selectors = {
    composerMaximized: '[data-cy-appearance-composer="maximized"]',
    composerPopup: '[data-cy-appearance-composer="popup"]',
    inboxColumn: '[data-cy-appearance-inbox="column"]',
    inboxRow: '[data-cy-appearance-inbox="row"]',
    conversationGroup: '[data-cy-appearance-conversations="group"]',
    conversationSingleMessage: '[data-cy-appearance-conversations="single"]',
    stickyLabels: '[data-cy-appearance="sticky-labels"]',
    composerMode: '[data-cy-appearance="composer-mode"]',
    composerTextDirection: '[data-cy-appearance="composer-text-direction"]'
};

function setDefault() {
    clickAll([selectors.composerMaximized, selectors.inboxRow, selectors.conversationSingleMessage]);
    cy.get(selectors.composerMode).select('Plain text');
    cy.get(selectors.composerTextDirection).select('Right to Left');
    notification.notificationContainerIsVisible(); //We should have at least 1 notification from previous tests.
    notification.count(0); //Make sure the previous notifications are gone.
}

// it's possible to have multiple notifications with the same text.
// This is makes it hard to distinguish the origin for each notification.
const waitForFadeout = true;

context('Layouts', () => {
    before(() => {
        cy.autoLogin('free');
        cy.visit('/appearance');
        cy.url().should('include', '/appearance');
        setDefault();
    });

    describe('Composer size', () => {
        it('Set composer size to popup', () => {
            cy.get(selectors.composerPopup).click();
            notification.hasText('Preference saved', waitForFadeout);
        });

        it('Set composer size to maximized', () => {
            cy.get(selectors.composerMaximized).click();
            notification.hasText('Preference saved', waitForFadeout);
        });
    });

    describe('Inbox display', () => {
        it('Set inbox display to column', () => {
            cy.get(selectors.inboxColumn).click();
            notification.hasText('Preference saved', waitForFadeout);
        });

        it('Set inbox display to row', () => {
            cy.get(selectors.inboxRow).click();
            notification.hasText('Preference saved', waitForFadeout);
        });
    });

    describe('Conversation view', () => {
        it('Enable conversation groups', () => {
            cy.get(selectors.conversationGroup).click();
            notification.hasText('Preference saved', waitForFadeout);
        });

        it('Enable single messages', () => {
            cy.get(selectors.conversationSingleMessage).click();
            notification.hasText('Preference saved', waitForFadeout);
        });
    });

    describe('Sticky labels', () => {
        it('Toggle sticky labels', () => {
            //Sticky labels are enabled only when conversation mode is ON.
            cy.get(selectors.conversationGroup).click();
            notification.count(0); //Make sure the previous notification is gone.

            cy.get(selectors.stickyLabels).click();
            notification.hasText('Preference saved', true);

            cy.get(selectors.stickyLabels).click();
            notification.hasText('Preference saved', true);
        });
    });

    describe('Composer mode', () => {
        it('Set composer mode to normal', () => {
            cy.get(selectors.composerMode).select('Normal');
            notification.hasText('Preference saved', waitForFadeout);
        });

        it('Set composer mode to plain text', () => {
            cy.get(selectors.composerMode).select('Plain text');
            notification.hasText('Preference saved', waitForFadeout);
        });
    });

    describe('Composer text direction', () => {
        it('Left to right', () => {
            cy.get(selectors.composerTextDirection).select('Left to Right');
            notification.hasText('Preference saved', waitForFadeout);
        });

        it('Right to left', () => {
            cy.get(selectors.composerTextDirection).select('Right to Left');
            notification.hasText('Preference saved'); //Last test, don't need to wait for fadeout.
        });
    });
});
