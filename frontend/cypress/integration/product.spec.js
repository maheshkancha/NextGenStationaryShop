/// <reference types="cypress" />

describe("Project Management Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Manage Product").click();
  });

  it("should render the Project Management Page", () => {
    cy.get(".product-mngmt-title").should("contain", "Product Management");
  });

  it('should show Add Product screen upon clicking "Product" button', () => {
    cy.get(".product-mngmt-menu").contains("Product").click();
  });
});
