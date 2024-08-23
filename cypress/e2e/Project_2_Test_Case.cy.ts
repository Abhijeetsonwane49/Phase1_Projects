describe('Account Creation Project', () => {
    it('Visits the initial project page', () => {
      cy.visit('http://localhost:4200/')
      cy.contains('Practice_App')
      cy.get('[placeholder="First Name"]').type('Abhijeet')
      cy.get('[id="2"]').type('Sonwane')
      cy.get('input[type="Text3"]').type('Sangharajsonwae@gmail.com')
      cy.get('[type="Text4"]').type('+13133071202')
      cy.get('[id="5"]').click()
      cy.get('input[type="checkbox"]').check()
      cy.get('button[type="Submit"]').click()
    })
  })