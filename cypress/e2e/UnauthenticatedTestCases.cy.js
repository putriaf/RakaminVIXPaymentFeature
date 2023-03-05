describe("Unauthenticated User Checkout Program - Scenario 2", () => {
  it("Check Out for Unauthenticated Users", () => {
    // Steps
    cy.log("=== OPENING RAKAMIN WEB STAGING ===");
    cy.visit("https://web-staging.rakamin.com/");
    cy.title().should("eq", "Rakamin Academy");

    cy.log("=== GO TO VIX EXPLORE PAGE ===");
    cy.visit(
      "https://web-staging.rakamin.com/virtual-internship-experience/explore"
    );

    // cy.clickVIXCard("1");
    cy.visit(
      "https://web-staging.rakamin.com/virtual-internship-experience/digital-marketing-muamalat"
    );

    cy.xpath("//button[contains(text(), 'Daftar sekarang')]")
      .should("be.enabled")
      .click({ force: true });

    cy.xpath("//button[@data-cy='login-first-button']").click();
    cy.login("tester456@gmail.com", "tester456");
    cy.visit(
      "https://web-staging.rakamin.com/virtual-internship-experience/explore"
    );

    // Handle Confirmation Pop Up
    cy.xpath("//button[@data-cy='confirmation-resume-filling-button']").click();

    cy.clickVIXCard("1");
    cy.xpath("//button[contains(text(), 'Daftar sekarang')]")
      .should("be.enabled")
      .click({ force: true });

    cy.xpath("//*[@data-cy='vix-form-title']").should(
      "contain.text",
      "Virtual Internship"
    );

    // FILL FORM
    cy.xpath("//input[@data-cy='full-name-text-field']").type("Tester");
    cy.xpath("//input[@data-cy='phone-number-text-field']").type("62878787090");
    cy.xpath("//*[@data-cy='vix-info-source-option-3']").click();
    cy.xpath("//*[@data-cy='agreement-checkbox']").click();

    // CLICK SUBMIT BUTTON
    cy.xpath("//button[@data-cy='vix-form-submit-button']")
      .should("be.enabled")
      .click();

    // CONFIRM POP UP
    cy.xpath("//button[@data-cy='button-confirm']").click();
  });
});
