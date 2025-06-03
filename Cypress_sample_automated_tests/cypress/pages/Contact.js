class Contact {
    get subheading() {
        return cy.get("h3.page-subheading")
    }

    get dropdownList() {
        return cy.get("#id_contact")
    }

    get formName() {
        return cy.get(`input[name="from"]`)
    }

    get formOrderId() {
        return cy.get(`input[name="id_order"]`)
    }

    get formMessage() {
        return cy.get("#message")
    }

    get formSubmit() {
        return cy.get("#submitMessage")
    }

    get contactAlert() {
        return cy.get("p.alert-success")
    }

    dropdownSelect() {
        this.dropdownList.select("Customer service");
    }

    email(emailValue) {
        this.formName.type(emailValue);
    }

    orderId(orderIdValue) {
        this.formOrderId.type(orderIdValue);
    }

    messageType(messageValue) {
        this.formMessage.type(messageValue);
    }

    submitContact() {
        this.formSubmit.click();
    }
    
}

export default new Contact();