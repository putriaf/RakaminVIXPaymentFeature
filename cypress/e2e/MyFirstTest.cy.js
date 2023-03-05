describe("My First Test", () => {
  it("verify title-positive test", () => {
    // Steps
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title-negative test", () => {
    // Steps
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM123");
  });

  it("verify length using xpath", () => {
    // Steps
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.xpath("//h5").should("have.length", 1);
  });
});
