class ProductDetailPage {

    verifyUrl() {
        cy.url().should('include', 'prod.html')
        return
    }

    addToCart() {
        cy.contains('a', 'Add to cart').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Product added')
        });
        return
    }

}

const productDetail = new ProductDetailPage();
export default productDetail;