class FavoritesPage {
    get btnNavfavorites() {
        return ('#top-favorite > .chakra-text');
    }
    get btnRemoveFromfavorite() {
        return ('#remove-favorite-btn');
    }
    get productName() {
        return ('.chakra-text.css-1n64n71');
    }
    AddToCartButtons(prodname) {
        prodname = '[data-item-name="' + prodname + '"]'
        return prodname;
    }
    addProductToCart(product) {
        let prodAddBtn = this.AddToCartButtons(product);
        cy.get(prodAddBtn).click({ force: true });
    }

}
export default new FavoritesPage()