class CartPage {

    moveToCart() {
        //cy.get('.navbar-nav.ml-auto').find('li').contains('a', 'Cart').click()
        cy.visit("https://www.demoblaze.com/cart.html");
        return;
    }

    verifyUrl() {
        return cy.url().should('include', 'cart.html');
    }

    verifyEmptyCart() {
        return cy.get('.table-responsive')
            .find('tr')
            .should('have.length', 1);
    }

    verifyNonEmptyCart() {
        return cy.get('.table-responsive')
            .find('tr')
            .should('not.have.length', 1);
    }

    clickOnDeleteProductButton() {
        cy.get('.table-responsive')
            .get('tr')
            .contains('a', 'Delete')
            .click();
            return;
    }

    clickOnPlaceOrderButton() {
        cy.contains('button', 'Place Order').click()
        return;
    }

    verifyPurchaseFormPresence() {
        return cy.get('#orderModal').should('exist');
    }

    fillPurchaseFormMandatoryFields(formName, creditCard) {
        //fill only mandatory fields
        cy.get('#name').type(formName, { delay: 0 });
        cy.get('#card').click().type(creditCard, { delay: 0 });
        return;
    }

    clickOnPurchaseButton() {
        cy.contains('button', 'Purchase').click();
        return;
    }

    verifyPurchaseConfirmation() {
        //check if purchase was completed successfully
        cy.contains('h2', 'Thank you for your purchase!');
        cy.contains('button', 'OK').click();
        return;
    }

}

const cart = new CartPage();
export default cart;