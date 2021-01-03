describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Renders header text', () => {
    cy.get('h1').contains('Bruno Paz')
  })
})
