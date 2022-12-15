import HomePage from "./home.page";

class LoginPage {
    get inputEmail() {
        return ('//*[@id="1-email"]');
    }
    get inputPassword() {
        return ('//input[@id="1-password"]');
    }
    get btnSubmit() {
        return ('//button[@id="1-submit"]');
    }
    get signUpTab(){
        return ('[xpath="1"]');
    }
    get passwordErrorMsg(){
        return('.animated.fadeInUp');
    }
    
    login(email, password) {
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputPassword).type(password);
        cy.get(this.btnSubmit).click();
    }
    signup(email, password) {
        cy.get(this.signUpTab).click();
        cy.get(this.inputEmail).type(email);
        cy.get(this.password).type(password);
        cy.get(this.btnSubmit).click();
    }
}
export default new LoginPage()
