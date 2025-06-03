/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";
import { productName, notFound } from "../fixtures/productData.json";
import { womenTabHeading } from "../fixtures/headings.json";
import { url } from "../fixtures/url.json";

describe("Searching the store for a product", () => {
    it("Testing the correct operation of the search input", () => {
        Base.openHomePage();
        cy.url().should("include", url);
        Home.productNameType(productName);
        Home.searchInput.should("have.value", productName);
        Home.productNameClear();
        Home.searchInput.should("have.value", "");
    });

    it("Searching the store by incorrect product name", () => {
        Home.productNameType(`${productName} {enter}`);
        Home.searchAlert.should("be.visible").and("include.text", notFound);
    });

    it("Searching the store by product category", () => {
        Women.womenTabEnter();
        Women.subheading.should("be.visible").and("include.text", womenTabHeading);
        Women.dropdownSelect();
        Women.productDropdownList.should("have.value", "price:desc");
        Women.checkDresses();
        Women.dressesCheckbox.should("be.checked");
        Women.searchFilters.should("be.visible");
        Women.checkAvailability();
        Women.availabilityFilters.should("be.checked");
    })
});