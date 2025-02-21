class Newsletter {
    get newsletterInput() {
        return cy.get("#newsletter-input")
    }

    get newsletterSubmit() {
        return cy.get(`button[name="submitNewsletter"]`)
    }

    get newsletterAlert() {
        return cy.get("p.alert-danger")
    }

    emailType(emailValue) {
        this.newsletterInput.type(emailValue);
    }

    submitNewsletter() {
        this.newsletterSubmit.click();
    }

}

export default new Newsletter();