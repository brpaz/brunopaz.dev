describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })

  it('Opens projects page', () => {
    cy.get('h1').contains('Projects')

    cy.get('.main-nav')
      .find("a[href*='/projects']")
      .should('have.class', 'nuxt-link-exact-active')
  })

  it('Renders projects cards', () => {
    cy.get('#projects-list')
      .find('.project-card')
      .its('length')
      .should('be.gte', 1)
  })

  it('Opens Project details', () => {
    cy.get('#projects-list .project-card')
      .first()
      .find('a h3')
      .then(($el) => {
        const projectName = $el.text().trim()

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get($el)
          .click()
          .wait(500)
          .get('h1')
          .then((header) => header.text().trim())
          .should('equal', projectName)
      })
  })
})
