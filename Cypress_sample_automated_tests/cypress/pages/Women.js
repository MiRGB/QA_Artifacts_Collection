class Women {
    get womenTab() {
        return cy.get(`a[title="Women"]`)
    }

    get subheading() {
        return cy.get("span.cat-name")
    }

    get productDropdownList() {
        return cy.get("#selectProductSort")
    }

    get dressesCheckbox() {
        return cy.get("#layered_category_8")
    }

    get searchFilters() {
        return cy.get("#enabled_filters")
    }

    get availabilityFilters() {
        return cy.get("#ul_layered_quantity_0 input")
    }

    womenTabEnter() {
        this.womenTab.click();
    }

    dropdownSelect() {
        this.productDropdownList.select("price:desc");
    }

    checkDresses() {
        this.dressesCheckbox.check();
    }

    checkAvailability() {
        this.availabilityFilters.check();
    }

}

export default new Women();