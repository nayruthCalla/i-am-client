/* eslint-disable no-undef */
/// <reference types="Cypress" />
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('iamp landing visit', () => {
    cy.contains('Iniciar Sesión')
    cy.contains('Crear Página')
    cy.contains('Deja que tu portafolio web Hable por tí')
    cy.contains('Todas las funciones que necesitas')
  })
})
