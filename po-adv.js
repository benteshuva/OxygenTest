var po = 
    //TEST FOR GIT SYNC
{
    homePage:
    {
        loginBtn : [
            'link=Sign in',
            'css=a.login',
            '//a[contains(text(),\'Sign in\')]',
        ],
        userHeader: [
            '//header[@id=\'header\']/div[2]/div/div/nav/div/a/span',
            '//nav/div/a/span'
        ]
    },
    loginPage:
    {
        emailFld: [
            'id=email',
            '//input[@id=\'email\']',
            'css=#email',

        ],
        passwordFld: [
            'id=passwd',
            '//input[@id=\'passwd\']',
            'css=#passwd'
        ],
        loginSubmit:[
            '//button[@id=\'SubmitLogin\']/span', 
            '//div[3]/div/div/p',
            'css=div.alert.alert-danger > p'
        ],
    }  

}
module.exports = po;
