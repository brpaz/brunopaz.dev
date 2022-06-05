describe("Work Page", () => {
  beforeEach(() => {
    cy.visit("/work");
  });

  it("Opens projects page", () => {
    cy.get("h1").contains("Work");

    cy.get(".main-nav").find("a[href*='/work']").should("have.class", "active");
  });

  it("Renders projects cards", () => {
    cy.get(".project-card").its("length").should("be.gte", 1);
  });

  it("Opens Project details", () => {
    cy.get(".project-card")
      .first()
      .find("a h3")
      .then(($el) => {
        const projectName = $el.text().trim();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get($el)
          .click()
          .wait(500)
          .get("h1")
          .then((header) => header.text().trim())
          .should("equal", projectName);
      });
  });
});
