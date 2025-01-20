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
import "cypress-real-events/support";
/// <reference types="cypress-xpath" />

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:8080/authenticate'); // Adjust the URL to your login page
  
    cy.get('input[name="email"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  
    // Verify login was successful
    cy.xpath("//div[@class='sc-hqyNC iwIKiC']//div")
      .should("be.visible")
      .and("contain", "User test@mail.com logged in sucessfully"); // Replace with actual expected text
      cy.wait(1000)
      cy.xpath("//div[@class='sc-hqyNC iwIKiC']").click();
      cy.wait(1000);
  });