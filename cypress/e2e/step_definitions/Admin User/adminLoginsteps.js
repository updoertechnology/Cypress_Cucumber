import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from 'cypress/support/pages/Admin User/LoginPage'
import {admintestdata_login} from '../../../fixtures/Admin User/adminDetails.json'


Given("Navigate to Admin Base Url", () => {
 // cy.visit("/");
  cy.visit(admintestdata_login.adminbaseUrl);
  cy.wait(2000);
});


When("User Enters Username", () => {
    loginPage.typeUsername(admintestdata_login.email)
  });
When("User Enters Password", () => {
    loginPage.typePassword(admintestdata_login.password)
  });

When("Click on login button", () => {
    loginPage.clickLogin()
  });


Then("Verify the Admin Url", () => {
  cy.url().should("contains", "/home");
});

