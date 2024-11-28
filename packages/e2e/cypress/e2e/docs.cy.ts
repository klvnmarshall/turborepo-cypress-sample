/**
 * @author Kelvin Kinyoro on 21/11/2024
 */
describe('Home page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    it('should display logo code on home page', () => {
        cy.get('code').should('be.visible')
    });


    it('should display footer logo on home page', () => {
        cy.get('#footer').should('be.visible')
    });

})