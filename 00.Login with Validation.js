web.transaction('Defining script variables');
//TEST FOR GIT SYNC1
var po = require('./po.js');
//var po = require('./po-adv.js');
var email = 'cbtesting1337@gmail.com';
var password = 'q1w2e3r4';

web.transaction("Opening browser and entering the website");
web.init();
web.open('http://automationpractice.com/index.php');
web.selectWindow('title=My Store');

web.transaction("Navigating to login page");
web.click(po.homePage.loginBtn);
web.selectWindow('title=Login - My Store');

web.transaction("Logging in");
web.click(po.loginPage.emailFld);
web.type(po.loginPage.emailFld, email);
web.selectWindow('title=Login - My Store');
web.click(po.loginPage.loginSubmit);

web.transaction("Validating error");
web.waitForText('//div[@id=\'center_column\']/div/p', 'There is 1 error');
web.click(po.loginPage.passwordFld);
web.type(po.loginPage.passwordFld, password);

web.transaction("Submitting cerdentials");
web.click(po.loginPage.loginSubmit);
web.selectWindow('title=My account - My Store');

web.transaction("Final validation - user is logged in.");
web.assertText(po.homePage.userHeader, 'CloudBeat Testing');
