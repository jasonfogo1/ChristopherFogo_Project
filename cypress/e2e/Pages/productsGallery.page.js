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
    get inputsearchName(){
        return('#search');
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

    AddToCartButtons(prodname) {
        prodname = '[data-item-name="' + prodname + '"]'    
        return prodname;
    }

    getProductNames() {                          //Function to get all product names on the product page
        let products = [];
        cy.get(this.productName).each(($elem, index) => {
            products[index] = $elem.text();
            cy.log(products[index]);
        })
        return products;
    }

    addProductToCart(product) {
        let prodAddBtn = this.AddToCartButtons(product);
        cy.get(prodAddBtn).scrollIntoView();
        cy.wait(2500);
        cy.get(prodAddBtn).click({ force: true });
        
    }



}
export default new ProductPage()