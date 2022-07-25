context('Funcionalidade login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
  });

  it('deve fazer login com sucesso', () => {
   
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form >.button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno')
  })

  it('deve exibir uma msg de erro ao inserir usuario invalido', () => {
    
    cy.get('#username').type('aluno_eba@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form >.button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

  })
  it('deve exibir uma msg de erro ao inserir senha invalido', () => {
   
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form >.button').click()

    cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail')
  })
})