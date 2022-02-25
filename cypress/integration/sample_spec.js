/* eslint-disable no-undef */
/// <reference types="Cypress" />
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Renders text of the page navigation', () => {
    cy.contains('Iniciar Sesión')
    cy.contains('Crear Página')
  })
  it('Renders welcome text', () => {
    cy.contains('Deja que tu portafolio web Hable por tí')
  })
  it('Renders text of the page', () => {
    cy.contains('Comparte el link de tu portafolio web')
    cy.contains('Agregar tus skills, retos y experiencias')
    cy.contains('Agrega tus Redes Sociales para que te contacten')
  })
  it('Be able to log in to the web application', () => {
    cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
    cy.location('pathname').should('include', 'login')
  })
})
