describe("Blog Page", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });
  it("Renders page", () => {
    cy.get("h1").contains("My Blog");
    cy.get(".main-nav").find("a[href*='/blog']").should("have.class", "active");

    cy.get(".pagination").find("a[class*='current-page']").contains("1");
  });

  it("Paginates Blog posts", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(".pagination a")
      .eq(1)
      .click()
      .wait(1000)
      .get(".pagination")
      .find("a[class*='current-page']")
      .contains("2");

    cy.url().should("include", "/blog/page/2");
  });
});
