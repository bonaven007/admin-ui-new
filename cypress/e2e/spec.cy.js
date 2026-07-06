describe("User Sign Up", () => {
  it("should allow user to sign up with valid data", () => {
    cy.visit("http://localhost:5173");
    cy.wait(2000);
    cy.url().should("include", "/login");
    cy.wait(2000);
    cy.contains("a", "Create an account").click();
    cy.wait(2000);
    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Name")
      .type("Hadi")
      .should("have.value", "Hadi");
    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hadi@example.com")
      .should("have.value", "hadi@example.com");
    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.contains("button", "Sign up").click();

    cy.wait(5000);

    cy.url().should("include", "/");
  });
});
