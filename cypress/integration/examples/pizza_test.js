describe('My First Test', () => {
    it('Clicks Form page', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Pizza').click()
      cy.get('textarea').type('its a me mario')
      
      cy.get('input:eq(3)').click()
      cy.get('input:eq(4)').click()
      cy.get('input:eq(5)').click()
      cy.get('input:eq(0)').type('its a name!')
      cy.get('input:eq(1)').type('email@email.com')
      cy.get('button').click()
    })
  })