describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('https://simplilearn.com')
      cy.contains('Simplilearn')
      cy.get('.login').click()
      cy.get('.email').type('Abhijeetrao')
      cy.wait(3000)
      cy.get('#password').type('12345')
      cy.url().should('include','user')
      cy.get('input[id="remember-me"]').check()
    

    })
  })