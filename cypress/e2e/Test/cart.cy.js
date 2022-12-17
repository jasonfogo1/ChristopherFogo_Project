/// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import ProductPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import Cart from '../Pages/cart.page.js'
describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/products');
    })

    it('Validate an Item can be removed from cart from detailed cart page', () => {
        let product = 'Quality Hooded Sweatshirt'
        ProductPage.addProductToCart(product);
        cy.wait(3500);
        cy.get(Cart.removeItem).click();
        cy.get(Cart.cartIcon).should('have.text', ' 0 ');
    })

    it('Verify user can increase quantity from detailed cart page', () => {
        let product = 'Quality Pink Pants'
        ProductPage.addProductToCart(product);
        cy.wait(1500);
        cy.get(Cart.btnIncrement).click();
        cy.get(Cart.cartIcon).should('have.text', ' 2 ');
    })

    it('Verify total in the cart ', () => {
        let product = 'Quality Pink Pants';
        ProductPage.addProductToCart(product);
        cy.wait(2500);
        cy.get(Cart.btnContinueShopping).click({ force: true });
        let product2 = 'Quality Hooded Sweatshirt';
        ProductPage.addProductToCart(product2);
        cy.wait(1500);
        let sum = 0;
        cy.get(Cart.itemPrice).each(($elem, index) => {
            sum = sum + parseFloat($elem.text().replaceAll('$', ''));
        })
            .then(() => {
                cy.get(Cart.cartTotal).should('have.text', '$' + sum.toFixed(2));
            })
    })
})