/* eslint-disable */
/// <reference types="Cypress" />
describe('iAmp - 2to2', () => {
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

  it('Log in to the app', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
  })

  it('Add about me ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    cy.get('[name="username"]').type('Nayruth Calla')
    cy.get('[name="occupation"]').type(
      ' Apasionada en Desarrollo con Javascript React / Web Apps y Automatización con NodeJS'
    )
    cy.get('[name="aboutMe"]').type(
      'Hola, soy Nayruth 😄, una desarrolladora 💻 de Perú 🇵🇪. Soy una programodora web [Javascript] me apasiona todo lo relacionado con aplicaciones en tiempo real. Me gusta el cine y los deportes 🏃'
    )
    cy.get('[name="interests"]').type(
      '👨🏻‍💻 Actualmente estoy trabajando en la aplicación de web con React, Graphql y node'
    )
    cy.get('[name="linktype"]').select('LinkedIn')
    cy.get('[name="inputLink"]').type('https://github.com/nayruthCalla')
    cy.get('[data-test="btnAddLinkSocialNet"]').click()
    cy.get('[data-test="btnDeletLinkSocialNet"]').click()
    cy.get('[name="linktype"]').select('LinkedIn')
    cy.get('[name="inputLink"]').type('https://github.com/nayruthCalla')
    cy.get('[data-test="btnAddLinkSocialNet"]').click()
    cy.get('[name="linktype"]').select('Gmail')
    cy.get('[name="inputLink"]').type('nayruth.calla@gmail.com')
    cy.get('[data-test="btnAddLinkSocialNet"]').click()
    cy.get('[data-test="btnAddAbout"]').click()
    cy.contains('OK').click()
    // cy.get('[data-test="btnDeleteAbout"]').click()
  })
  it('Add proyect ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    // add proyect
    cy.get('[data-test="btnAddProyect"]').click()
    cy.get('[name="nameProyect"]').type('Zupport')
    cy.get('[name="descriptionProyc"]').type(
      'App web que ayuda a personas pedir y dar ayuda virtual y si está en ti puede invitar un cafecito'
    )
    cy.get('[name="techFirst"]').type('React')
    cy.get('[name="techSecond"]').type('Node.js')
    cy.get('[data-test="selectLevelProyect"]').select('Intermedio')
    cy.get('[data-test="selectLinkProyect"]').select('Demo')
    cy.get('[data-test="inputLinkProyect"]').type(
      'https://github.com/nayruthCalla'
    )
    cy.get('[data-test="addLinkProyect"]').click()
    cy.get('[name="btnAddProyect"]').click()
  })
  it('Add Skill ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    // add skill
    cy.get('[data-test="btnAddSkill"]').click()
    cy.get('[name="skillName"]').type('Javascript')
    cy.get('[data-test="addCardSkill"]').click()
  })
  it('Add Achievements ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    // add skill
    cy.get('[data-test="btnAddAchiev"]').click()
    cy.get('[name="title"]').type('Full Stack Javascript')
    cy.get('#description').type(
      '💻 Fuí parte de una programa intensivo de cuatro meses, donde he desarrollado mis habilidades técnicas y blandas.'
    )
    cy.get('[data-test="addCardAchiev"]').click()
  })
  it('Donations ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    // payment
    cy.contains('¿Cómo nos puedes ayudar?')
    cy.contains(
      'iAmp, es una App Web si fines de lucro, busca ayudar a compartir lo mejor de ti en un portafolio web. y tú también puedes ayudarnos enviandonos regalitos o invitándonos cafecitos para i-Amp, elige las opciones disponibles para tí'
    )
  })
  it('Renders Portfolio ', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
    cy.get('[data-test="showPortfolio"]').click()
  })
})
