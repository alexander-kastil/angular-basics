/// <reference types="Cypress" />

context('Skills', () => {
  beforeEach(() => {
    cy.intercept("GET",'http://localhost:3000/skills',{fixture: "skills.json"});
    cy.visit('http://localhost:4200/skills/');
  });

  describe('Skill Items', () => {
    it('Shows 3 rows by default', () => {
      cy.get('.skillrow').should('have.length', 3);
    });

    it('Shows the edit text when add button is clicked', () => {
      cy.get('#btnAdd').click({ force: true });
      cy.contains('Skill Detail');
    });
  });
});
