/// <reference types="cypress" />

import Base from "../pages/Base";
import Cart from "../pages/Cart";
import Women from "../pages/Women";
import { productAdded, emptyCart } from "../fixtures/alerts.json";
import { cartHeading, womenTabHeading } from "../fixtures/headings.json";
import { url } from "../fixtures/url.json";

describe("Adding and removing a product from the cart", () => {
    it("Adding a product to the cart", () => {
        Base.openHomePage();
        cy.url().should("include", url);
        Women.womenTabEnter();
        Women.subheading.should("be.visible").and("include.text", womenTabHeading);
        Cart.enterProduct();
        Cart.blackColour.should("have.class", "selected");
        Cart.availableProduct();
        Cart.whiteColour.should("have.class", "selected");
        Cart.addToCart();
        Cart.successAlert.should("be.visible").and("include.text", productAdded);
        Cart.continueShopping();
    });

    it("Removing a product from the cart", () => {
        Cart.viewCart();
        Cart.cartSummary.should("be.visible").and("include.text", cartHeading);
        Cart.deleteProduct();
        Cart.emptyCartAlert.should("be.visible").and("include.text", emptyCart);
    })
});