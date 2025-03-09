class CartPage {
    openCart() {
        cy.get('.navbar-nav.ml-auto').find('li').contains('Cart').click()
    }

    verifyUrl() {
        cy.url().should('include', 'cart.html')
    }

    verifyEmptyCart() {
        cy.get('.table-responsive')
            .find('tr')
            .should('have.length', 0)
    }

    verifyNonEmptyCart() {
        cy.get('.table-responsive')
            .find('tr')
            .should('not.have.length', 0)
    }

    clickOnDeleteProductButton() {
        cy.get('.table-responsive')
            .find('tr')
            .nextAll()
            .eq(1)
            .contains('a', 'Delete')
            .click()
    }

    clickOnPlaceOrderButton() {
        cy.contains('button', 'Place Order').click()
    }

    verifyPurchaseFormPresence() {
        cy.get('#orderModal').should('exist')
    }

    fillPurchaseFormMandatoryFields(formName, creditCard) {
        //fill only mandatory fields
        cy.get('#name').type(formName, { delay: 0 })
        cy.get('#card').click().type(creditCard, { delay: 0 })
    }

    clickOnPurchaseButton() {
        cy.contains('button', 'Purchase').click()
    }

    verifyPurchaseConfirmation() {
        //check if purchase was completed successfully
        cy.contains('h2', 'Thank you for your purchase!')
        cy.contains('button', 'OK').click()
    }

}

const cart = new CartPage();
export default cart;