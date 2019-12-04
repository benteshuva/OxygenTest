web.transaction('Defining script variables');
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
web.click(po.loginPage.passwordFld);
web.type(po.loginPage.passwordFld, password);

web.transaction("Submitting cerdentials");
web.click(po.loginPage.loginSubmit);
web.selectWindow('title=My account - My Store');

web.transaction("Final validation - user is logged in.");
web.assertText(po.homePage.userHeader, 'CloudBeat Testing');

web.transaction("Navigating to contact page.");
web.click(po.navBar.contactUs);
web.selectWindow('title=Contact us - My Store');

web.transaction("Sending a message");
web.click(po.contactPage.contactReason);
web.select(po.contactPage.contactReason, 'label=Customer service');
web.click(po.contactPage.msgFld);
web.type(po.contactPage.msgFld, 'Test message');
web.click(po.contactPage.submitBtn);

web.transaction("Validating message has been sent.")
web.selectWindow('title=Contact us - My Store');
web.assertText(po.contactPage.succMsg, 'Your message has been successfully sent to our team.');
