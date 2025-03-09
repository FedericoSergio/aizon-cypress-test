Feature: Successful purchase
    Background: Navigate to the Website
        Given I navigate to the Website
    Scenario: Add a product to cart
        When I select a random product
        And I am in the product detail page
        And I click on Add to cart button
        And I move to cart page
        Then The cart is not empty
    Scenario: Complete the purchase
        When I am in cart page
        And The cart is not empty
        And I click on Place Order button
        And The purchase form opens
        And I fill in the mandatory fields
            | name           | cc |
            | junior.QA.user | 1234 |
        And I click on Purchase button
        Then Verify purchase confirmation 