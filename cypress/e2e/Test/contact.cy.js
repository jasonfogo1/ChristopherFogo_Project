/// <reference types="cypress" />
import ContactPage from "../Pages/contact.page";
describe('Contact',()=>{
    beforeEach(() => {
        cy.visit('/contact');
    })
    it('Validate message can be successfully sent',()=>{
        ContactPage.addInfo('Jay','Grey','grey@yopmail.com','Test','this is a test')
        cy.get(ContactPage.btnSend).click();
        cy.get(ContactPage.successMsg).should('have.text','Message Sent!');
    })
    it('Validate user cannot send message without entering a message',()=>{
        ContactPage.addInfoNoMsg('Jay','Grey','grey@yopmail.com','Test');
        cy.get(ContactPage.btnSend).click();
        cy.get(ContactPage.errorInputMsg).should('have.text','Field is required!')
        cy.get(ContactPage.successMsg).should('not.exist'); 
    })
    it('Validate user can not send message without entering an email',()=>{
        ContactPage.addInfoNoMsg('Jay','Grey','Test','This is a test');
        cy.get(ContactPage.btnSend).click();
        cy.get(ContactPage.errorInputMsg).should('have.text','Field is required!')
        cy.get(ContactPage.successMsg).should('not.exist'); 
    })
})