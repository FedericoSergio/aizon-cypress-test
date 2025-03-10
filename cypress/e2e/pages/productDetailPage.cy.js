class ProductDetailPage {

    verifyUrl() {
        cy.url().should('include', 'prod.html');
        return;
    }

    addToCart() {
        cy.contains('a', 'Add to cart').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Product added');
        });
        return;
    }

    moveToCart() {
        cy.get('.navbar-nav.ml-auto').find('li').contains('a', 'Cart').click();
        return;
    }

}

const productDetail = new ProductDetailPage();
export default productDetail;