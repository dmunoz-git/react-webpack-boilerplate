describe("First cypress test", () => {
    it("should visit the app and check if contains an logo", () => {
        cy.visit("http://localhost:3000");
        cy.contains("logo");
    });
})