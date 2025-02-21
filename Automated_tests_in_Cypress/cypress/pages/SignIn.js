class SignIn {
    get signInForm() {
        return cy.get("#login_form")
    }

    get email() {
        return cy.get("#email")
    }

    get password() {
        return cy.get("#passwd")
    }

    get signInSubmit() {
        return cy.get("#SubmitLogin")
    }

    get signInAlert() {
        return cy.get("div.alert-danger li")
    }

    emailType(emailValue) {
        this.email.type(emailValue);
    }

    passwordType(passwordValue) {
        this.password.type(passwordValue);
    }

    submitSignIn() {
        this.signInSubmit.click();
    }

}

export default new SignIn();