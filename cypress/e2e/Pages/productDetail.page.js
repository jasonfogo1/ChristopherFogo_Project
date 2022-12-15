import ProductPage from '../Pages/productsGallery.page.js'
class PDetailsPage{
    get btnAddToCart(){
        return('#add-to-cart');
    }

    addToCart(){
        cy.get(ProductPage.qualityMousepad).scrollIntoView();
        cy.wait(1500);
        cy.get(ProductPage.qualityMousepad).click();
        cy.wait(3000);
        cy.get(this.btnAddToCart).click();
    }

}
export default new PDetailsPage()