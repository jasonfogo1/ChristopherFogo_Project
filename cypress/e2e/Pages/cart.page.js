class CartPage{
    // get (){
    //     return('#signInOrRegister');
    // }
    createSelector(prodname){
        prodname=('//h2[contains(text(),"'+prodname+'")]')
        return prodname;   
    }
    get viewDetailedCArt(){
        return('button.snipcart-button-link');
    }
    get removeItem(){
        return('[title="Remove item"]');
    }
    get cartIcon(){
        return('#snipcart > div > div > header > div > button');
    }
    get btnIncrement(){
        return ('button[title="Increment quantity"]');
    }
    get itemPrice(){
        return('[class="snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary"]');
    }
    get cartTotal(){
        return('.snipcart-summary-fees__amount');
    }
    get btnContinueShopping(){
        return('.snipcart-modal__close-title');
    }
    get topCartItem(){
        return('li:nth-child(1) > div > div > div.snipcart-item-line__header > h2');
    }
    get btnCheckout(){
        return('.snipcart-button-primary');
    }
    
}
export default new CartPage()