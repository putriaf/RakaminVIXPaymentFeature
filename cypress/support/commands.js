// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

/// <reference types="cypress-xpath"/>

Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://web-staging.rakamin.com/login");
  cy.xpath("//input[@data-cy='login-email-text-field']").type(email);
  cy.xpath("//input[@data-cy='login-password-text-field']").type(password);
  cy.xpath("//button[@data-cy='login-submit-button']").click();
  cy.url().should("contain", "dashboard");
});

Cypress.Commands.add("clickVIXCard", (index) => {
  cy.xpath("//div[@data-cy='vix-card-" + index + "']/a").should("be.visible");
  cy.xpath("//div[@data-cy='vix-card-" + index + "']/a").click();
  //   Overwrite to direct link
  // cy.visit(
  //   "https://web-staging.rakamin.com/virtual-internship-experience/digital-marketing-muamalat"
  // );
});
