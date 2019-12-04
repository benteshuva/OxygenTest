var po = 
{
    navBar: 
    {
        myCart: '//header[@id=\'header\']/div[3]/div/div/div[3]/div/a/b',
        newProducts: 'link=New products',
        storeLocator: 'link=Our stores',
        contactUs: '(//a[contains(text(),\'Contact us\')])[1]',
        creditSlips: 'link=My credit slips', 
    },
    homePage:
    {
        loginBtn : 'link=Sign in',
        userHeader: '//header[@id=\'header\']/div[2]/div/div/nav/div/a/span',
        shirtsBtn: 'link=T-SHIRTS',
        searchFld: 'id=search_query_top',
        firstChoiceSelect: '//body[@id=\'index\']/div[2]/ul/li',
    },
    loginPage:
    {
        emailFld: 'id=email',
        passwordFld: 'id=passwd',
        loginSubmit:'//button[@id=\'SubmitLogin\']/span', 
    }, 
    productsPage:
    {
        productFrame: '//*[contains(@id,"fancybox-frame")]',
        productName: '//div[@id=\'center_column\']/div/div/div[3]/h1',
        shirtImg: "(//img[@title='Faded Short Sleeve T-shirts'])[1]",
        addCartBtn: '//*[@id="add_to_cart"]/button',
        addedLbl: '(//div[@id=\'layer_cart\']/div/div/h2)[1]',
        exitPopUp: '//div[@id=\'layer_cart\']/div/div/span', 
        newProductLbl: "//p[text()='No new products.']", 
    },
    myCartPage:
    {
        productAdded: 'css=small.cart_ref', 
    },
    storesPage:
    {
        storesHeader: '//div[@id=\'center_column\']/h1',
    },
    contactPage:
    {
        contactReason: 'id=id_contact',
        msgFld: 'id=message',
        submitBtn: '//button[@id=\'submitMessage\']/span/i',
        succMsg: '//div[@id=\'center_column\']/p',
    },
    creditSlipPage:
    {
        warningLbl: '//div[@id=\'block-history\']/p',
    }
}
module.exports = po;