describe('Home page', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="about"]')
      .first()
      .click()

    cy.url().should('include', '/about')

    cy.get('h1').contains('About Page')
  })
})
