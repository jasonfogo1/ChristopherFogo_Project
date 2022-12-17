/// <reference types="cypress" />
import ProductsPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
import FavoritesPage from '../Pages/favorites.page.js'
describe('Wishlist/Favorites', () => {
    beforeEach(() => {
        cy.visit('/products');
    })
    it('Verify user can add product to favourites from product detail page', () => {
        PDetailsPage.addProductToFavorite();
        cy.get(PDetailsPage.favoritesPopup).should('have.text', 'Quality Kids Tshirt added to favorites');
        cy.get(FavoritesPage.btnNavfavorites).should('contain', '1');
    })
    it('Verify user can remove product to favourites from product detail page', () => {
        PDetailsPage.addProductToFavorite();
        cy.get(PDetailsPage.closePopup).click();
        cy.wait(1500);
        cy.get(PDetailsPage.btnRemoveFromfavorite).click();
        cy.get(PDetailsPage.favoritesPopup).should('have.text', 'Quality Kids Tshirt removed from favorites');
        cy.get(FavoritesPage.btnNavfavorites).should('contain', '0');
    })
    it('Verify user can add to cart from favourites', () => {
        PDetailsPage.addProductToFavorite();
        cy.get(FavoritesPage.btnNavfavorites).click();
        cy.get(PDetailsPage.closePopup).click();
        cy.wait(1500);
        cy.get(FavoritesPage.btnRemoveFromfavorite).click();

    })
    it('Verify product will stay in favourites after adding to cart', () => {
        PDetailsPage.addProductToFavorite();
        cy.get(FavoritesPage.btnNavfavorites).click();
        let product = 'Quality Kids Tshirt'
        FavoritesPage.addProductToCart(product);
        cy.get(CartPage.btnContinueShopping).click();
        cy.get(FavoritesPage.btnNavfavorites).should('contain', '1');
        cy.get(FavoritesPage.productName).should('exist');


    })
    it('Verify multiple products can be added to favourites on product gallery page', () => {
        ProductsPage.addProductsToFavorite();
        cy.get(FavoritesPage.btnNavfavorites).should('contain', '2');
    })
})