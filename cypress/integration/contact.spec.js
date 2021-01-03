describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
  })
  it('Renders page', () => {
    cy.get('h1').contains('Blog')
    cy.get('.main-nav')
      .find("a[href*='/contact']")
      .should('have.class', 'nuxt-link-exact-active')
  })
})
