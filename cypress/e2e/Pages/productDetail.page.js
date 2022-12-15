import ProductPage from '../Pages/productsGallery.page.js'
class PDetailsPage {
    get btnAddToCart() {
        return ('#add-to-cart');
    }
    get relatedItemCategory() {
        return ('.css-12qzrsi span.css-1ccau2i');
    }
    get btnNextImg() {
        return ('button[class="control-arrow control-next"]');
    }
    get btnPrevImg() {
        return ('button[class="control-arrow control-prev"]');
    }
    get btnIncreaseQuantity() {
        return ('#product-increase');
    }
    get btndecreaseQuantity() {
        return ('#product-decrease');
    }


    addToCart() {
        cy.get(ProductPage.qualityMousepad).scrollIntoView();
        cy.wait(1500);
        cy.get(ProductPage.qualityMousepad).click();
        cy.wait(3000);
        cy.get(this.btnAddToCart).click();
    }
    increaseProduct() {
        cy.get(ProductPage.qualityKidsShirt).click();
        cy.wait(2500);
        cy.get(this.btnIncreaseQuantity).click();
        cy.get(this.btnAddToCart).click();
    }
    scrollImages(direction) {
        direction = 'button[class="control-arrow control-' + direction      //allows to select next or prev
        cy.get(direction).trigger('mouseover');
        cy.get(direction).click();
    }
}
export default new PDetailsPage()