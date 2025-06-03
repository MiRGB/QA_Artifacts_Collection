/// <reference types="cypress" />

import Base from "../pages/Base";
import Nav from "../pages/Nav";
import SignIn from "../pages/SignIn";
import { email, password } from "../fixtures/userData.json";
import { signInFailed } from "../fixtures/alerts.json";
import { url } from "../fixtures/url.json";

describe("A user logs in to their account using incorrect credentials", () => {
    it("Go to the login page", () => {
        Base.openHomePage();
        cy.url().should("include", url);
        Nav.signInNavBar.click();
        SignIn.signInForm.should("be.visible");
    });

    it("Providing incorrect data and trying to log in to user account", () => {
        SignIn.emailType(email);
        SignIn.email.should("have.value", email);
        SignIn.passwordType(password);
        SignIn.password.should("have.value", password);
        SignIn.submitSignIn();
        SignIn.signInAlert.should("be.visible").and("include.text", signInFailed);
    })
});