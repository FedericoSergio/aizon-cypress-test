/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import home from "../../../pages/homePage.cy.js";
import productDetail from "../../../pages/productDetailPage.cy.js";
import cart from "../../../pages/cartPage.cy.js";

Given("I navigate to the Website", () => {
    home.enterURL()
})

When("I select a random product", () => {
    home.selectRandomProduct()
})

When("I am in the product detail page", () => {
    productDetail.verifyUrl()
})

When("I click on Add to cart button", () => {
    productDetail.addToCart()
})

When("I move to cart page", () => {
    cart.openCart()
})

When("I am in cart page", () => {
    cart.verifyUrl()
})

When("The cart is not empty", () => {
    cart.verifyNonEmptyCart()
})

When("I click on Place Order button", () => {
    cart.clickOnPlaceOrderButton()
})

When("The purchase form opens", () => {
    cart.verifyPurchaseFormPresence()
})

When("I fill in the mandatory fields", (datatable) => {
    datatable.hashes().forEach((element) => {
        cart.fillPurchaseFormMandatoryFields(element.name, element.cc);
    });
})

When("I click on Purchase button", () => {
    cart.clickOnPurchaseButton()
})

Then("The cart is not empty", () => {
    cart.verifyNonEmptyCart()
})

Then("Verify purchase confirmation", () => {
    cart.verifyPurchaseConfirmation()
})