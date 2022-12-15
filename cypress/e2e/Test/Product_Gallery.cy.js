/// <reference types="cypress" />
import Authentication from '../Pages/authentication.page'
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
describe('Product Gallary', () => {
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
    it('Verify each product has a Name', () => {
        cy.get(ProductPage.productName).each(($element, index) => {
            expect($element.text()).to.not.be.null;                //Checks each product has a has a name 
            expect($element).to.be.visible;                        //Checks if Price is Displayed
        })
    })
    it('Verify each product has a price', () => {
        cy.get(ProductPage.productPrice).each(($element, index) => {
            expect($element.text()).to.include('$');                //Checks each product has a price
            expect($element).to.be.visible;                         //Checks if Price is Displayed
        })
    })
    it('Verify clicking on a product image will redirect to product details page',()=>{
        cy.get(ProductPage.qualityMug).scrollIntoView();
        cy.wait(1500);
        cy.get(ProductPage.qualityMug).click();                     // Selects the product
        cy.wait(1500);
        cy.url().should('contain','https://ui-automation-camp.vercel.app/products/quality-mug');// Validates the after clicking product it is redirected to correct page
    })
})