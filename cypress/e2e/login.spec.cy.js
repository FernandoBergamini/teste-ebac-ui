/// <reference types="cypress" />

context('Funcionalidade login', () => {
  it('Deve fazer login com sucesso', () => {
     cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username').type('aluno_ebac@teste.com')
     cy.get('#password').type('teste@teste.com')
     cy.get('.woocommerce-form > .button').click()
     cy.get('.page-title').should('contain' , 'Minha conta')

    
  });

  it('Deve exibir msg de erro ao inserir usuario invalidos', () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username').type('aluno_eba@teste.com')
     cy.get('#password').type('teste@teste.com')
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido')
      
  });

  it.only('Deve exibir msg de erro ao inserir senha invalidos', () => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username').type('aluno_ebac@teste.com')
     cy.get('#password').type('teste@teste')
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail')
      
  });
});