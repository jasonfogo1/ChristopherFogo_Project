/// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import ProductsPage from '../Pages/productsGallery.page.js'
describe('Sort and Filter', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(HomePage.btnSignInorReg).click();
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name='submit']").click();

            });
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')

    })
    it('Verify user can Sort Z to A', () => {

        let products = [];
        cy.get(ProductsPage.productName).each(($elem, index) => {
            products[index] = $elem.text();
        })
            .then(() => {
                cy.get(ProductsPage.selectSort).select('zToA');// Select sort A to Z
                cy.wait(1500);
                products.sort().reverse();
                cy.get(ProductsPage.productName).each(($element, itemIndex) => {
                    expect($element.text()).equal(products[itemIndex]);
                })

            })

    })
    it('Verify user can filter by pants', () => {
        cy.get(ProductsPage.selectFilter).select('pant');   // Select hats filter
        cy.wait(1500);
        cy.get(ProductsPage.selectFilter).should('have.value', 'pant');
        cy.get(ProductsPage.productCategory).each(($element, index) => {
            cy.get(ProductsPage.selectFilter).should('have.value', 'pant');
            expect($element.text()).equal('pants');
        })

    })
    it('Should reset filters', () => {
        cy.get(ProductsPage.selectFilter).select('pant');
        cy.get(ProductsPage.selectSort).select('aToZ');
        cy.get(ProductsPage.btnReset).click();
        cy.get(ProductsPage.selectFilter).should('have.value', '');
        cy.get(ProductsPage.selectSort).should('have.value', '');
    })
})