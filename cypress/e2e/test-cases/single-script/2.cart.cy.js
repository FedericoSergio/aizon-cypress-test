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
        cy.get('#tbodyid').get('h2')
        .invoke('text')
        .then((prodName) => {
            cy.contains('a', 'Add to cart').click()
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.contains('Product added')
            });

            //open cart and delete first element from the list
            cy.get('.navbar-nav.ml-auto').find('li').contains('Cart').click()
            cy.url().should('include', 'cart.html')
            cy.get('.table-responsive')
            .should('exist')
            .find('tr')
            .contains('td', prodName) //select the product previously added
            .should('exist')
            .nextAll()
            .eq(1)
            .contains('a', 'Delete')
            .click()
        })
        
    })

})