/// <reference types="cypress" />
import Authentication from '../Pages/authentication.page'
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
describe('Add to Cart', () => {
    beforeEach(() => {
        cy.visit('/products');
            cy.wait(1500);
    })

    it('Verify a user can add a product to the cart from product details page.', () => {
        PDetailsPage.addToCart();                                                       // Calls function to add product to cart
        cy.get(CartPage.cartIcon).should('have.text', ' 1 ');                           // Checks if the an item has been added to the cart
        cy.get(CartPage.topCartItem).should('have.text', ' Quality Mousepad ');         // Checks if item added to cart is the correct item
    })

    it('Verify a user can add a product to the cart from Products Gallery page.', () => {
        let product = 'Quality Mousepad'
        ProductPage.addProductToCart(product);
        cy.get(CartPage.cartIcon).should('have.text', ' 1 ');                             // Checks if the an item has been added to the cart
        cy.get(CartPage.topCartItem).should('have.text', ' ' + product + ' ');            // Checks if item added to cart is the correct item
    })

    it('Verify a user can add multiple products to the cart from Products Gallery page.', () => {
        let product = 'Quality Pink Pants'
        ProductPage.addProductToCart(product);                                            // Adds Item defined as product to cart
        cy.wait(2500);
        cy.get(CartPage.cartIcon).should('have.text', ' 1 ');                             // Checks if the an item has been added to the cart
        cy.get(CartPage.topCartItem).should('have.text', ' ' + product + ' ');            // Checks if item added to cart is the correct item
        cy.get(CartPage.btnContinueShopping).click()
        cy.wait(2500);
        let product2 = 'Quality Hooded Sweatshirt'
        ProductPage.addProductToCart(product2);                                           // Adds Item defined as product to cart  
        cy.wait(2500);
        cy.get(CartPage.cartIcon).should('have.text', ' 2 ');                             // Checks if the an item has been added to the cart
        cy.get(CartPage.topCartItem).should('have.text', ' ' + product2 + ' ');           //Checks if item added to cart is the correct item
    })
})

