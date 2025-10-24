/// <reference types="cypress" />

describe('Homepage Tests', () => {
  it('displays homepage title', () => {
    cy.visit('http://localhost:5173')
    cy.get('#home-title').should('contain', 'Welcome')
  })
})
