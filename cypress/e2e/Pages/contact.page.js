class ContactPage{
    get inputFirstname(){
        return('#firstName');
    }
    get inputLastname(){
        return('#lastName');
    }
    get inputEmail(){
        return ('#email');
    }
    get inputSubject(){
        return('#subject');
    }
    get inputMsg(){
        return('#message');
    }
    get btnSend(){
        return('.chakra-button.css-vs0e4t');
    }
    get successMsg(){
        return('#toast-1-title');
    }
    get errorInputMsg(){
        return('[id="field-:r6:-feedback"]');
    }
    get errorInputEmail(){
        return('[id="field-:r4:-feedback"]');
    }
    addInfo(firstname,lastname,email,subject,msg){
        cy.get(this.inputFirstname).type(firstname);
        cy.get(this.inputLastname).type(lastname);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(subject);
        cy.get(this.inputMsg).type(msg);
    }
    addInfoNoMsg(firstname,lastname,email,subject){
        cy.get(this.inputFirstname).type(firstname);
        cy.get(this.inputLastname).type(lastname);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(subject);
    }
    addInfoNoEmail(firstname,lastname,subject,msg){
        cy.get(this.inputFirstname).type(firstname);
        cy.get(this.inputLastname).type(lastname);
        cy.get(this.inputSubject).type(subject);
        cy.get(this.inputMsg).type(msg);
    }

}
export default new ContactPage()