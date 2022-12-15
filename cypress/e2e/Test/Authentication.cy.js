/// <reference types="cypress" />
import HomePage from '../Pages/home.page.js'
import AuthenticationPage from '../Pages/authentication.page.js';
describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(HomePage.btnSignInorReg).click();
    })

    it('Verify User can sign up with a new email and password', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('div.auth0-lock-tabs-container').click();
                cy.get('[type="email"]').type("testing3@yopmail.com");    //Enters a unregistered Email
                cy.get('[type="password"]').type("Password1");
                cy.get("[name='submit']").click();
                cy.wait(1500);
            }
        ).then(() => {
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products');
            cy.get('#top-sign-out').should('exist');
        })
    })

    it('Verify User can Login with valid credentials', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");          //Enters a valid Email
                cy.get('[type="password"]').type("Password1");                          //Enters a valid Password
                cy.get("[name=submit]").click();
            })
            .then(() => {
                cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products');
            })
    })

    it('Verify User cannot sign up with a email already registered', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('div.auth0-lock-tabs-container').click();
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");// Email that was registered previously
                cy.get('[type="password"]').type("Password1");
                cy.get("[name='submit']").click();
                cy.wait(1500);

            }
        ).then(() => {
            cy.get(AuthenticationPage.passwordErrorMsg).should('have.text', "We're sorry, something went wrong when attempting to sign up.");
        })
    })

    it('Verify User cannot Login with invalid password', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");
                cy.get('[type="password"]').type("invalidPassword");            //Enters a invalid Password
                cy.get("[name=submit]").click();
            });
        cy.get(AuthenticationPage.passwordErrorMsg).should('have.text', 'Wrong email or password.');
    })

    it('Verify User cannot Login with invalid email', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("vt@yopmail.com");                //Enters a invalid Email
                cy.get('[type="password"]').type("Password1");
                cy.get("[name=submit]").click();
            });
        cy.get(AuthenticationPage.passwordErrorMsg).should('have.text', 'Wrong email or password.');
    })

})
