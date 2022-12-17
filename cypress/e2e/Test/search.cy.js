import HomePage from '../Pages/home.page.js'
import ProductsPage from '../Pages/productsGallery.page.js'
import PDetailsPage from '../Pages/productDetail.page.js'
import CartPage from '../Pages/cart.page.js'
describe('Search by Name', () => {
    beforeEach(() => {
        cy.visit('/products');
    })
    it('Validate products displayed when a search is done .',()=>{
        let name='Quality Fitted Hat';
        cy.get(ProductsPage.inputsearchName).type(name);
        cy.get(ProductsPage.productName).each(($element, index) => {
            expect($element.text()).contains(name, { matchCase: false });   // Checks the name of the product found is the same as name searched
        })

    })
    it('Verify user can search by a part of the product name',()=>{
        let name= "Qual"
        cy.get(ProductsPage.inputsearchName).type(name);
        cy.get(ProductsPage.productName).each(($element, index) => {
            expect($element.text()).contains(name, { matchCase: false });
        })
    })
    it('Validate Search textbox placeholder',()=>{
        cy.get(ProductsPage.inputsearchName).invoke('attr','placeholder',)
        .should('eq','Search by name'); //checks Placeholder tells user what to enter
    })
    it('Validate if a user enters invalid name in search nothing will be displayed',()=>{
        let name= "Cat"
        cy.get(ProductsPage.inputsearchName).type(name);
        cy.get(ProductsPage.productName).should('not.exist');

    })

})