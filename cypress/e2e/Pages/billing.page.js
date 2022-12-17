class BillingPage {

    get inputFullName() {
        return ('[name="name"]');
    }
    get inputEmail() {
        return ('[name="email"]')
    }
    get inputStreet() {
        return ('[class="snipcart-form__address-autocomplete"]');
    }
    get inputApt() {
        return ('[name="address2"]');
    }
    get inputCity() {
        return ('[name="city"]');
    }
    get inputCountry() {
        return ('.snipcart-typeahead input');
    }
    get inputState() {
        return ('.snipcart-typeahead input');
    }
    get inputZip() {
        return ('[name="postalCode"]');
    }
    get btnContinue() {
        return ('.snipcart-submit');
    }
    get allfields(){
        return('.snipcart-form__field');
    }
    get errorMsg(){
        return('[data-for="email"]');
    }
    get paymentIframe(){
        return('.snipcart-payment-card-form iframe');
    }
    get inputCardNumber(){
        return('#card-number')
    }
    get inputCartExDate(){
        return('#expiry-date');
    }
    get inputCardCvv(){
        return('#cvv')
    }
    get btnPlaceOrder(){
        return('.snipcart-base-button__wrapper');
    }
    addBillingInfo(name, email, street, apt, city, country, state, zip) {
        cy.get(this.inputFullName).type(name);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputStreet).type(street);
        cy.get(this.inputApt).type(apt);
        cy.get(this.inputCity).type(city);
        cy.get(this.inputCountry).eq(0).type(country+'{enter}', { force: true });
        cy.get(this.inputState).eq(1).type(state, { force: true });
        cy.get(this.inputZip).type(zip);
        cy.get(this.btnContinue).click({ force: true });
    }
    addCardinfo(cardNumber,date,cvv){
        cy.iframe(this.paymentIframe).find(this.inputCardNumber).type(cardNumber);
        cy.iframe(this.paymentIframe).find(this.inputCartExDate).type(date);
        cy.iframe(this.paymentIframe).find(this.inputCardCvv).type(cvv);
        cy.get(this.btnPlaceOrder).click();
    }

}
export default new BillingPage()