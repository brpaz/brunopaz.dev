describe('Healthcheck', function () {
    it('It opens the homepage', function () {
        cy.visit(Cypress.env('baseUrl'));
        cy.contains('Bruno Paz');
    })
})