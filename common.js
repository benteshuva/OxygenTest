var po = require('./po.js');
module.exports = 
{
    Login: function(email,password)
    {
        const web = ox.web;
        web.transaction("Navigating to login page");
        web.click(po.homePage.loginBtn);
        web.selectWindow('title=Login - My Store');

        web.transaction("Logging in");
        web.click(po.loginPage.emailFld);
        web.type(po.loginPage.emailFld, email);
        web.click(po.loginPage.passwordFld);
        web.type(po.loginPage.passwordFld, password);

        web.transaction("Submitting cerdentials");
        web.click(po.loginPage.loginSubmit);
        web.selectWindow('title=My account - My Store');

        web.transaction("Final validation - user is logged in.");
        web.assertText(po.homePage.userHeader, 'CloudBeat Testing');
    }
}