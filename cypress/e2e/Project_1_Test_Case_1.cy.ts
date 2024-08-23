describe('My First Test Case', () => {
    it('Visits the Homepage', () => {
      cy.visit('https://simplilearn.com')
      cy.contains('Resources')
      cy.get('#header_srch').type('Selenium')
      cy.get('.search_icon').click()
      cy.contains('Automation Testing Masters Program')
    })
  })