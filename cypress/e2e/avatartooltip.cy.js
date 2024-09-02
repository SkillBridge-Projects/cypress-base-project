describe("validate avatartooltip", () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/authenticate')
    cy.get('input[name="email"]').type('test@mail.com')
    cy.get('input[name="password"]').type('test')
    cy.get('button[type="submit"]').click()
  })

  it('close toast bar', () => {
    cy.get('.sc-jqCOkK').click()
  })

  it('mouseover validation for tooltip', () => {
    cy.get('[data-testid="avatar:test 1"]').realHover()
    cy.get('.avatartooltip').should('be.visible').and('have.text', 'Test 1')
  })
})
