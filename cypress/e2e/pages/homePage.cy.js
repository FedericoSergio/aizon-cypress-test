class HomePage {
    enterURL() {
        cy.visit('/')
    }

    verifyPageTitle() {
        return cy.get('.navbar-brand').should('exist')
    }

    clickSignupLink() {
        cy.get("#signin2").click()
        return this;
    }

    enterSignupEmailPassword(username, password) {
        cy.get('#sign-username').clear.type(username, { delay: 0 })
        cy.get('#sign-password').clear.type(password, { delay: 0 })
        return this;
    }

    clickSignupButton() {
        cy.contains('button', 'Sign up').click()
        return this;
    }

    clickLoginLink() {
        cy.get("#login2").click()
        return this;
    }

    enterLoginEmailPassword(username, password) {
        cy.get('#loginusername').clear.type(username, { delay: 0 })
        cy.get('#loginpassword').clear.type(password, { delay: 0 })
        return this;
    }

    clickLoginButton() {
        cy.contains('button', 'Log in').click()
        return this;
    }

    verifyUserLoggedIn() {
        cy.get('#navbarExample').contains('a', 'Welcome ' + username).should('exist')
    }

    clickLogoutLink() {
        cy.get("#logout2").click();
        return
    }

    selectRandomProduct() {
        //select a random product from first page
        const product = cy.get('#tbodyid').children().eq(Math.floor(Math.random() * 9))
        product.scrollIntoView({ behavior: 'smooth', block: 'center' })
        product.click('top')
        return product
    }
}

const home = new HomePage();
export default home;