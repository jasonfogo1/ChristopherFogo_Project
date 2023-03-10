/// <reference types="cypress" />
import Authentication from '../Pages/authentication.page'
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
describe('Product Details Page', () => {
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

    it('Verify Products listed in related products have the same category as the product selected.', () => {
        cy.get(ProductPage.qualityKidsShirt).scrollIntoView();
        cy.wait(1500);
        cy.get(ProductPage.qualityKidsShirt).click();
        cy.wait(2500);
        cy.get(PDetailsPage.relatedItemCategory).each(($element) => {
            expect($element.text()).equal('shirt');                           // Checks each product in related products has category 'shirt'
        })
    })
    
    it('Verify Quantity can be increased on product details page', () => {
        PDetailsPage.increaseProduct();                         // Increases the quantity of product
        cy.wait(2500);
        cy.get(CartPage.cartIcon).should('have.text', ' 2 ');   // Checks cart badge number is 2
    })

    it('Verify user can navigate through product images', () => {
        cy.get(ProductPage.qualityKidsShirt).click();
        cy.wait(2500);
        PDetailsPage.scrollImages('next');                  // Function used to click next product image button 
        cy.wait(1500);
        cy.get(PDetailsPage.btnPrevImg).should('exist');     // Check the click previous product image button exist
        PDetailsPage.scrollImages('prev');                  // Function used to click previous product image button 
        cy.wait(1500);
        cy.get(PDetailsPage.btnNextImg).should('exist');    // Check the click next product image button exist
    })
})