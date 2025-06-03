class Nav {
    get signInNavBar() {
        return cy.get("a.login")
    }
    
    get contactUsNavBar() {
        return cy.get(`a[title="Contact us"]`)
    }
}

export default new Nav();