Feature: Add product to cart and then delete it
    Background: Navigate to the Website
        Given I navigate to the Website
    Scenario: Add a product to cart
        When I select a random product
        And I am in the product detail page
        And I click on Add to cart button
        And I move to cart page
        Then The cart is not empty
    Scenario: Delete a product from cart
        When I move to cart page
        And I delete a product
        Then The cart is empty