/// <reference types="cypress" />
import ContactPage from "../Pages/contact.page";
describe('Contact',()=>{
    beforeEach(() => {
        cy.visit('/contact');
    })
    
    it('Validate message can be successfully sent',()=>{
        ContactPage.addInfo('Jay','Grey','grey@yopmail.com','Test','this is a test')    // Calls a function to add info to each textbox 
        cy.get(ContactPage.btnSend).click();                                            // Clicks the button to send message
        cy.get(ContactPage.successMsg).should('have.text','Message Sent!');             // Checks the success message
    })

    it('Validate user cannot send message without entering a message',()=>{
        ContactPage.addInfoNoMsg('Jay','Grey','grey@yopmail.com','Test');               // Calls a function to add info to each textbox except the message text field
        cy.get(ContactPage.btnSend).click();
        cy.get(ContactPage.errorInputMsg).should('have.text','Field is required!')      // Checks error message displayed
        cy.get(ContactPage.successMsg).should('not.exist');                             // Checks the success message does not exist
    })

    it('Validate user can not send message without entering an email',()=>{
        ContactPage.addInfoNoEmail('Jay','Grey','Test','This is a test');               // // Calls a function to add info to each textbox excluding the email
        cy.get(ContactPage.btnSend).click();
        cy.get(ContactPage.errorInputEmail).should('have.text','Field is required!')
        cy.get(ContactPage.successMsg).should('not.exist'); 
    })
})