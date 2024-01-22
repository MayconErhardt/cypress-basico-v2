Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Maycon')
    cy.get('#lastName').type('Erhardt')
    cy.get('#email').type('mayconerhardtyquast@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    
})