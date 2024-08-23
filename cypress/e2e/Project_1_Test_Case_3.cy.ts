describe('Page Object Model', () => {
    it('Visits the Homepage', () => {
      cy.visit('https://simplilearn.com')
      cy.get('.login').click()
      cy.contains('Welcome back!')
      cy.get('.email').type('cupof23coffee@gmail.com')
      cy.get('input[placeholder="Email Address*"]')
      cy.get('#password').type('1234567')
      cy.get('input[placeholder="Password*"]')
      cy.get(':nth-child(7) > .btn').click()
      cy.get(':nth-child(7) > .btn').click()
      cy.contains('Please fill in all required fields')
    })
  })