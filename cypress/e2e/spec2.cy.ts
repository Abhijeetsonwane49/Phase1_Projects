describe('Validate form name as Login Page', () => {//Arrow function
  it('Visits the initial project page', () => {
    cy.visit('/')//Application url navigation
    cy.get('[placeholder="Username"]').type('Abhijeet')
    cy.get('[placeholder="Password"]').type('12345').should('have.value','12345')
    cy.get('[id="2"]').type('1234')
    cy.get('[type="Submit"]').click()
  })
  it('Visit the Functions', () => {
    cy.visit('/')//Application url navigation
    cy.contains('Login')
    cy.get('input[id="1"]').type('yes')
    cy.get('[name="Uname"').type('no')
  })
  it('Verify the Assertions', () => {
    cy.visit('/')
    cy.title().should('eq','PracticeApp')
    cy.title().should('include','App')
    //cy.title().should('have..','PracticeApp')
  })
})