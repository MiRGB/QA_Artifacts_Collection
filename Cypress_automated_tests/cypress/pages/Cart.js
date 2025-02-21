class Cart {
    get productTitle() {
        return cy.get(`h5 a[title="Blouse"]`)
    }

    get blackColour() {
        return cy.get(`li a#color_11`)
    }

    get whiteColour() {
        return cy.get(`li a#color_8`)
    }

    get addButton() {
        return cy.get(`button[name="Submit"]`)
    }

    get successAlert() {
        return cy.get("div.layer_cart_product h2")
    }

    get continueButton() {
        return cy.get(`span[title="Continue shopping"]`)
    }

    get viewCartButton() {
        return cy.get(`a[title="View my shopping cart"]`)
    }

    get cartSummary() {
        return cy.get("#cart_title")
    }

    get deleteButton() {
        return cy.get(`a[title="Delete"]`)
    }

    get emptyCartAlert() {
        return cy.get("p.alert-warning")
    }
    
    enterProduct() {
        this.productTitle.click();
    }

    availableProduct() {
        this.whiteColour.click();
    }

    addToCart() {
        this.addButton.click();
    }

    continueShopping() {
        this.continueButton.click();
    }

    viewCart() {
        this.viewCartButton.click();
    }

    deleteProduct() {
        this.deleteButton.click();
    }

}

export default new Cart();