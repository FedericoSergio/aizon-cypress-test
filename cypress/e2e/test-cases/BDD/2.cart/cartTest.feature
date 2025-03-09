Feature: Add product to cart and then delete it
    Background: I Log in with user
        Given I navigate to the Website
        And I click on Log in Link
        And I enter valid credential
            | username       | validpassword |
            | junior.QA.user | Pa$sw0rd12!   |
        And I click on Log in button
        Then Validate user is logged in
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