// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import CartPage from '../Pages/cart.page.js'
import BillingPage from '../Pages/billing.page.js'
import OrderCompletePage from '../Pages/orderComplete.page.js'
describe('Add to Cart', () => {
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

    })
    it('Verify user can enter billing info.',()=>{
        let product='Quality Cargo Pants'
        cy.wait(3500);
        ProductPage.addProductToCart(product);
        cy.wait(2500);
        cy.get(CartPage.btnCheckout).click({force:true});
        BillingPage.addBillingInfo("jason fogo","volevelowa-69345@yopmail.com",
        "pasiley St","3","Kingston","Jamaica","St Andrew","00000");
        cy.get(BillingPage.allfields).each(($element)=>{
            expect($element).not.to.be.empty;
        });

    })

    it('Validate user is not able to continue with an invalid Email',()=>{
        let product='Quality Cargo Pants'
        cy.wait(3500);
        ProductPage.addProductToCart(product);                          // Adds a product to the cart
        cy.wait(2500);
        cy.get(CartPage.btnCheckout).click({force:true});               // clicks the Checkout button
        BillingPage.addBillingInfo("jason fogo","invalid",
        "pasiley St","3","Kingston","Jamaica","St Andrew","00000");     // adds info into Billing Info Fields
        cy.get(BillingPage.errorMsg).should('have.text',' Please provide a valid email address '); // checks the error message for invalid emails
    })

    it('Verify user can complete checkout',()=>{
        let product='Quality Cargo Pants'
        cy.wait(3500);
        ProductPage.addProductToCart(product);                          // Adds a product to the cart
        cy.wait(2500);
        cy.get(CartPage.btnCheckout).click({force:true});               // clicks the Checkout button
        BillingPage.addBillingInfo("jason fogo","valid@gmail.com",
        "pasiley St","3","Kingston","Jamaica","St Andrew","00000");     // adds info into Billing Info Fields
        BillingPage.addCardinfo('4242 4242 4242 4242','0123','123');    // adds payment info
        cy.wait(2500);
        cy.get(OrderCompletePage.completeMsg).should('have.text','Thank you for your order');
    })
})