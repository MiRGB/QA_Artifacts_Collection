/// <reference types="cypress" />

import Base from "../pages/Base";
import Nav from "../pages/Nav";
import Contact from "../pages/Contact";
import { email, orderId, message } from "../fixtures/contactData.json";
import { messageSent } from "../fixtures/alerts.json";
import { messageHeading } from "../fixtures/headings.json";
import { url } from "../fixtures/url.json";

describe("Contacting support", () => {
    it("Go to the contact page", () => {
        Base.openHomePage();
        cy.url().should("include", url);
        Nav.contactUsNavBar.click();
        Contact.subheading.should("be.visible").and("include.text", messageHeading);
    });

    it("Filling out and sending the contact form", () => {
        Contact.dropdownSelect();
        Contact.dropdownList.should("have.value", "2");
        Contact.email(email);
        Contact.formName.should("have.value", email);
        Contact.orderId(orderId);
        Contact.formOrderId.should("have.value", orderId);
        Contact.messageType(message);
        Contact.formMessage.should("have.value", message);
        Contact.submitContact();
        Contact.contactAlert.should("be.visible").and("include.text", messageSent);
    })
});