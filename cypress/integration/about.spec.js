describe("About Page", () => {
  beforeEach(() => {
    cy.visit("/about");
  });
  it("Renders page", () => {
    cy.get("h1").contains("About me");
    cy.get(".main-nav")
      .find("a[href*='/about']")
      .should("have.class", "active");
  });
});
