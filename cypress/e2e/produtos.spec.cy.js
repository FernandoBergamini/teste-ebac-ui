/// <reference types = 'cypress' />

const { contains } = require("cypress/types/jquery");

describe('Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('deve selecionar um item da lista ', () => {
        cy.get('[class="product-block grid"]')
        .first()
        .click()
    });

});