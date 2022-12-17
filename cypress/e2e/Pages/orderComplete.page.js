class OrderCompletePage{
    get completeMsg(){
        return('div.snipcart__box--title > div:nth-child(2) > h1');
    }
}
export default new OrderCompletePage()