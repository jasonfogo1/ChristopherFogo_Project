/// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import ProductsPage from '../Pages/productsGallery.page.js'
describe('Sort and Filter', () => {
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
        cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products')

    })

    it('Verify user can Sort Z to A', () => {

        let products = [];
        cy.get(ProductsPage.productName).each(($elem, index) => {
            products[index] = $elem.text();
        })
            .then(() => {
                cy.get(ProductsPage.selectSort).select('zToA');// Select sort Z to A
                cy.wait(1500);
                products.sort().reverse();
                cy.get(ProductsPage.productName).each(($element, itemIndex) => {
                    expect($element.text()).equal(products[itemIndex]);
                })

            })
    })

    it('Verify user can Sort A to Z', () => {
        let products = [];
        cy.get(ProductsPage.productName).each(($elem, index) => {
            products[index] = $elem.text();
        })
            .then(() => {
                cy.get(ProductsPage.selectSort).select('aToZ');// Select sort A to Z
                cy.wait(1500);
                products.sort();
                cy.get(ProductsPage.productName).each(($element, itemIndex) => {
                    expect($element.text()).equal(products[itemIndex]);
                })

            })
    })

    it('Verify user can Sort low to high', () => {
        let products = [];
        cy.get(ProductsPage.productPrice).each(($elem, index) => {
            products[index] = $elem.text().replaceAll('$', '');
        })
            .then(() => {
                cy.get(ProductsPage.selectSort).select('lowToHigh');// Select sort low to high
                cy.wait(1500);
                products.sort(function (a, b) { return a - b });
                cy.get(ProductsPage.productPrice).each(($element, itemIndex) => {
                    expect($element.text()).equal('$' + products[itemIndex]);
                })
            })
    })

    it('Verify user can Sort high to low', () => {
        let products = [];
        cy.get(ProductsPage.productPrice).each(($elem, index) => {
            products[index] = $elem.text().replaceAll('$', '');
        })
            .then(() => {
                cy.get(ProductsPage.selectSort).select('highToLow');// Select sort high to low
                cy.wait(1500);
                products.sort(function (a, b) { return a - b }).reverse();
                cy.get(ProductsPage.productPrice).each(($element, itemIndex) => {
                    expect($element.text()).equal('$' + products[itemIndex]);
                })
            })
    })

    it('Verify user can filter by pants', () => {
        cy.get(ProductsPage.selectFilter).select('pant');   // Select Pants filter
        cy.wait(1500);
        cy.get(ProductsPage.selectFilter).should('have.value', 'pant');
        cy.get(ProductsPage.productCategory).each(($element, index) => {
            expect($element.text()).equal('pants');
        })

    })

    it('Validate Reset filters button removes all filters', () => {
        cy.get(ProductsPage.selectFilter).select('pant');
        cy.get(ProductsPage.selectSort).select('aToZ');
        cy.get(ProductsPage.btnReset).click();
        cy.get(ProductsPage.selectFilter).should('have.value', '');
        cy.get(ProductsPage.selectSort).should('have.value', '');
    })
})