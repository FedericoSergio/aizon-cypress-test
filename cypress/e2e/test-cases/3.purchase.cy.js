const formName = Cypress.env('name')
const creditCard = Cypress.env('cc')

context('Successful purchase', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('purchase a product', () => {
        cy.get('#tbodyid').should('exist')

        //select a random product from first page
        const product = cy.get('#tbodyid').children().eq(Math.floor(Math.random() * 9));
        product.scrollIntoView({ behavior: 'smooth', block: 'center' });
        product.click('top')
        
        //on product details, add it to cart
        cy.url().should('include', 'prod.html')
        cy.contains('a', 'Add to cart').click()

        //open cart
        cy.get('.navbar-nav.ml-auto').find('li').contains('Cart').click()
        cy.url().should('include', 'cart.html')
        cy.contains('button', 'Place Order').click()
        cy.get('#orderModal').should('exist')

        //fill only mandatory fields
        cy.get('#name').type(formName, { delay: 0 })
        cy.get('#card').click().type(creditCard, { delay: 0 })
        cy.contains('button', 'Purchase').click()

        //check if purchase was completed successfully
        cy.contains('h2', 'Thank you for your purchase!')
        cy.contains('button', 'OK').click()
        
    })

})