describe('Init Test', () => {
  it('should visit the app root url', () => {
    cy.visit('localhost:3000');
  });
});
