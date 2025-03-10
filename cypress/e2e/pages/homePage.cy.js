class HomePage {

    enterURL() {
        cy.visit('/')
        return;
    }

    verifyPageTitle() {
        return cy.get('.navbar-brand').should('exist');
    }

    clickSignupLink() {
        cy.get("#signin2").click();
        return;
    }

    enterSignupEmailPassword(username, password) {
        cy.get('#sign-username').type(username, { delay: 0 });
        cy.get('#sign-password').type(password, { delay: 0 });
        return;
    }

    clickSignupButton() {
        cy.contains('button', 'Sign up').click();
        return;
    }

    verifySuccessfulSignup() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Sign up successful.')
          });
        return;
    }

    clickLoginLink() {
        cy.get("#login2").click();
        return;
    }

    enterLoginEmailPassword(username, password) {
        cy.get('#loginusername').type(username, { delay: 0 });
        cy.get('#loginpassword').type(password, { delay: 0 });
        return;
    }

    clickLoginButton() {
        cy.contains('button', 'Log in').click();
        return;
    }

    verifyUserLoggedIn() {
        cy.get('#navbarExample').contains('a', 'Welcome ').should('exist');
        return;
    }

    clickLogoutLink() {
        cy.get("#logout2").click();
        return;
    }

    selectRandomProduct() {
        //select a random product from first page
        const product = cy.get('#tbodyid').children().eq(Math.floor(Math.random() * 9));
        product.scrollIntoView({ behavior: 'smooth', block: 'center' });
        product.click('top');
        return product;
    }
}

const home = new HomePage();
export default home;