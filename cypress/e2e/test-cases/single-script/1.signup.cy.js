const username = Cypress.env('username')
const password = Cypress.env('password')

context('Signup process', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('check if title and logo are visible', () => {
    cy.get('.navbar-brand').should('exist')
    cy.get('.navbar-brand').get('img').should('exist')
  })

  it('sign up a new user', () => {
    cy.get('.navbar-nav.ml-auto').find('li').last().contains("Sign up").click()
    .then(() => {
      cy.get('#sign-username').should('be.visible')
      cy.get('#sign-password').should('be.visible')

      cy.get('.modal-dialog').should('exist')
      //username
      cy.get('#sign-username').type(username, { delay: 0 })
      //password
      cy.get('#sign-password').type(password, { delay: 0 })
      cy.contains('button', 'Sign up').click()

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Sign up successful.')
      });
    })
  })

  it('log in with username and password previously created', () => {
    cy.get('#navbarExample').should('exist')
    cy.get('#navbarExample').findByText('Log in').click()
    
    cy.get('.modal-dialog').should('exist')
    //username
    cy.get('#loginusername').type(username, { delay: 0 })
    //password
    cy.get('#loginpassword').type(password, { delay: 0 })
    cy.contains('button', 'Log in').click()
    
    cy.get('#navbarExample').findByText('Welcome ' + username).should('exist')
  })

})
