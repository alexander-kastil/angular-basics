/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  describe('My Bogus Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true);
    });
  });

  describe('Intro', () => {
    it('Has the correct Title', () => {
      cy.get('.mat-mdc-card-title').should(
        'contain.text',
        'Angular - Single Page Application Development'
      );
    });
  });
});
