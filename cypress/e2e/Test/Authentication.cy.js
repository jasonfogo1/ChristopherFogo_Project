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
                cy.get('[type="email"]').type("testing3@yopmail.com");    // Enters a unregistered Email in Email textbox
                cy.get('[type="password"]').type("Password1");            // Enters password in Password textbox
                cy.get("[name='submit']").click();                        // Clicks the Submit button to complete sign up
                cy.wait(1500);
            }
        ).then(() => {
            cy.url().should('eq', 'https://ui-automation-camp.vercel.app/products');    // Checks the url to confirm sign up is successful
            cy.get('#top-sign-out').should('exist');                                    // Checks the signout button exists after sign up since user will be logged in
        })
    })

    it('Verify User can Login with valid credentials', () => {
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");          // Enters a valid Email in email textbox
                cy.get('[type="password"]').type("Password1");                          // Enters a valid Password in password textbox
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
                cy.get('[type="email"]').type("volevelowa-69345@yopmail.com");  // Enters email previously registered 
                cy.get('[type="password"]').type("Password1");
                cy.get("[name='submit']").click();
                cy.wait(1500);

            }
        ).then(() => {
            cy.get(AuthenticationPage.passwordErrorMsg)
                .should('have.text', "We're sorry, something went wrong when attempting to sign up.");      // Checks error message
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
        cy.get(AuthenticationPage.passwordErrorMsg).should('have.text', 'Wrong email or password.');    // Checks error message
    })

})
