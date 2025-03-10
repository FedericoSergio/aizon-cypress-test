/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import home from "../../../pages/homePage.cy.js";
import productDetail from "../../../pages/productDetailPage.cy.js";
import cart from "../../../pages/cartPage.cy.js";

Given("I navigate to the Website", () => {
    home.enterURL();
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
    cart.moveToCart()
})

When("I delete a product", () => {
    cart.clickOnDeleteProductButton()
})

Then("The cart is not empty", () => {
    cart.verifyNonEmptyCart()
})

Then("The cart is empty", () => {
    cart.verifyEmptyCart()
})