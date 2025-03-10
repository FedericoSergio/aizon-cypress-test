/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import home from "../../../pages/homePage.cy.js";

Given("I navigate to the Website", () => {
    home.enterURL();
});

When("I click on Sign up Link", () => {
    home.clickSignupLink();
});

When("I enter new credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        home.enterSignupEmailPassword(element.username, element.validpassword);
    });
});

When("I click on Sign up button", () => {
    home.clickSignupButton();
});

When("I click on Log in Link", () => {
    home.clickLoginLink();
});

When("I enter valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        home.enterLoginEmailPassword(element.username, element.validpassword);
    });
});

When("I click on Log in button", () => {
    home.clickLoginButton();
});

Then("The sign up is successful", () => {
    home.verifySuccessfulSignup();
})

Then("Validate user is logged in", () => {
    home.verifyUserLoggedIn();
});

Then("Validate the title after login", () => {
    home.verifyPageTitle();
});

When("I click logout link", () => {
    home.clickLogoutLink();
});