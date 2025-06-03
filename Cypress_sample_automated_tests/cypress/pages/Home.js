class Home {
    get searchInput() {
        return cy.get("#search_query_top")
    }

    get searchAlert() {
        return cy.get("p.alert-warning")
    }

    productNameType(productNameValue) {
        this.searchInput.type(productNameValue);
    }

    productNameClear() {
        this.searchInput.clear();
    }

}

export default new Home();