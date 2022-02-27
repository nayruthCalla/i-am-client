/* eslint-disable */
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

  it('Log in to the app', () => {
    cy.get('[data-test="loginbtn"]').click()
    cy.contains('Mi Panel').click
    cy.login()
      .then((resp) => {
        return resp.body
      })
      .then((body) => {
        const { access_token, expires_in, id_token } = body
        const auth0State = {
          nonce: '',
          state: 'some-random-state',
        }
        const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`
        cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie =
              'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State)
          },
        })
        // cy.visit('/')
      })
    //   .then(())
    cy.get('[data-test="btnHome"]').click()
    cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
  })
  it('Renders text of the page navigation', () => {
    cy.contains('Mi Panel')
    cy.contains('Cerrar Sesión')
  })
})

//   it('Log in to the app', () => {
//     cy.get('[data-test="loginbtn"]').click()
//     cy.contains('Mi Panel').click
//     // cy.get('#username').type('nayruth.calla+1@gmail.com')
//     // cy.get('#password').type('a9vCnVaVdUcieYu')
//     // cy.contains('Registrese').click()
//     // cy.contains('Iniciar sesión').click()
//     // cy.contains('Continuar con GitHub').click()

//     // cy.login()
//     //   .then((resp) => {
//     //     return resp.body
//     //   })
//     //   .then((body) => {
//     //     const { access_token, expires_in, id_token } = body
//     //     const auth0State = {
//     //       nonce: '',
//     //       state: 'some-random-state',
//     //     }
//     //     const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`
//     //     cy.visit(callbackUrl, {
//     //       onBeforeLoad(win) {
//     //         win.document.cookie =
//     //           'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State)
//     //       },
//     //     })
//     //     // cy.visit('/')
//     //   })
//     //   .then(())
//     // cy.get('[data-test="btnHome"]').click()
//     // cy.location('pathname').should('include', 'Mi Panel')
//     // cy.url().should('include', 'http://localhost:3000/dashboard')
//     // cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
//     // cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
//     // cy.get('[data-test="addPhoto"]').contains('Añadir imagen de pérfil').click()
//   })
// })
// describe('DashBoard/about', () => {
//   beforeEach(() => {
//     cy.visit('/dashboard')
//   })
//   it('Add profile picture', () => {
//     cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
//   })
//   // cy.get('[data-test="panelbtn"]').contains('Mi Panel').click()
//   // it('Add profile picture', () => {
//   //   cy.get('[data-test="addPhoto"]').contains('Añadir imagen de pérfil').click()
//   // })
// })
// describe('DashBoard/about', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
//   it('Renders text of the page navigation Dasboard', () => {
//     cy.contains('Iniciar Sesión')
//     cy.contains('Crear Página')
//   })
//   it('Add my first and last name', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add my profession', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add a description about me', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add my interests', () => {})
//   it('Add my Social Networks', () => {})
//   it('Save data', () => {})
// })
// describe('DashBoard/proyects', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
//   it('Add Project Name', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add project description', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add first tech', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add second tech', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Choose project difficulty level', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add project link', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Save data', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
// })
// describe('DashBoard/skills', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
//   it('Add Project Name', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
//   it('Add name skill', () => {
//     cy.contains('Comparte el link de tu portafolio web')
//     cy.contains('Agregar tus skills, retos y experiencias')
//     cy.contains('Agrega tus Redes Sociales para que te contacten')
//   })
// })
// describe('DashBoard/logros', () => {
//   beforeEach(() => {
//     cy.visit('/dashboard#logros')
//   })
//   it('Add achievement name', () => {
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Add achievement description', () => {})
// })
// describe('Portfolio', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   })
//   it('Renders welcome Hero', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Renders welcome About me', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Renders welcome proyects', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Renders welcome skills', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Renders welcome logros', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
//   it('Renders welcome Contact', () => {
//     cy.contains('Deja que tu portafolio web Hable por tí')
//     cy.get('[data-test="loginbtn"]').contains('Iniciar Sesión').click()
//     cy.wait(500).contains('Mi Panel').click()
//     cy.get('[data-test="btnHome"]').click()
//   })
// })
