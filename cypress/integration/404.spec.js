describe('404 Page', () => {
  beforeEach(() => {
    cy.visit('/xpto', { failOnStatusCode: false })
  })
  it('Renders page', () => {
    cy.get('body').contains('The requested page was not found')
  })
})
