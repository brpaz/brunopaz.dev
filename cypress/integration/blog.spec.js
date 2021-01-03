describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog')
  })
  it('Renders page', () => {
    cy.get('h1').contains('My Blog')
    cy.get('.main-nav')
      .find("a[href*='/blog']")
      .should('have.class', 'nuxt-link-exact-active')
  })
})
