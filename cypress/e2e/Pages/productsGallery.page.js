class ProductPage {
    get btnCart() {
        return ('#top-cart');
    }
    get qualityMousepad() {
        return ('img[src="/images/quality-mousepad.jpg"]');
    }
    get btnAddToCart() {
        return ('#add-to-cart');
    }
    get productName() {
        return ('.chakra-text.css-1n64n71');
    }
    get selectSort() {
        return ('#sort');
    }
    get inputsearchName() {
        return ('#search');
    }
    get selectFilter() {
        return ('#category');
    }
    get productCategory() {
        return ('.css-1ccau2i');
    }
    get btnReset() {
        return ('#reset');
    }
    get btnSignout() {
        return ('#top-sign-out');
    }
    get productPrice() {
        return ('.chakra-text.css-0');
    }
    get qualityMug() {
        return ('img[src="/images/quality-mug.jpg"]');
    }
    get qualityKidsShirt() {
        return ('img[src="/images/quality-tshirt-kids.jpg"]');
    }
    get btnfavorite() {
        return ('#add-to-favorite')
    }
    get btnRemoveFromfavorite() {
        return ('#remove-from-favorite');
    }
    get fittedHatFavorites() {
        return ('#product-0 #add-to-favorite');
    }
    get qualityMugFavorites() {
        return ('#product-3 #add-to-favorite');
    }
    AddToCartButtons(prodname) {
        prodname = '[data-item-name="' + prodname + '"]'
        return prodname;
    }

    getProductNames() {                          //Function to get all product names on the product page
        let products = [];
        cy.get(this.productName).each(($elem, index) => {
            products[index] = $elem.text();
        })
        return products;
    }

    addProductToCart(product) {
        let prodAddBtn = this.AddToCartButtons(product);
        cy.get(prodAddBtn).scrollIntoView();
        cy.wait(2500);
        cy.get(prodAddBtn).click({ force: true });

    }
    addProductsToFavorite() {
        cy.get(this.fittedHatFavorites).click();
        cy.get(this.qualityMugFavorites).click();
    }



}
export default new ProductPage()