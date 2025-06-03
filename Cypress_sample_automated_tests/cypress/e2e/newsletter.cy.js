/// <reference types="cypress" />

import Base from "../pages/Base";
import Newsletter from "../pages/Newsletter";
import { email } from "../fixtures/userData.json";
import { newsletterRegistered } from "../fixtures/alerts.json";
import { url } from "../fixtures/url.json";

describe("Subscribing to the newsletter of a user who is already subscribed", () => {
    it("Providing an email address that is already subscribed to the newsletter", () => {
        Base.openHomePage();
        cy.url().should("include", url);
        Newsletter.emailType(email);
        Newsletter.newsletterInput.should("have.value", email);
        Newsletter.submitNewsletter();
        Newsletter.newsletterAlert.should("be.visible").and("include.text", newsletterRegistered);
    })
});