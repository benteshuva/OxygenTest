web.transaction('Defining script variables');
var po = require('./Ben/po.js');
var common = require('./Ben/common.js');
//var po = require('./po-adv.js');
var email = 'cbtesting1337@gmail.com';
var password = 'q1w2e3r4';
var expectedTitle = 'Order slip - My Store';

web.transaction("Opening browser and entering the website");
web.init();
web.open('http://automationpractice.com/index.php');
web.selectWindow('title=My Store');

web.transaction("Login");
common.Login(email,password);

web.transaction("Navigating to credit Slips");
web.click(po.navBar.creditSlips);
web.assertText(po.creditSlipPage.warningLbl, 'You have not received any credit slips.');
web.assertTitle(expectedTitle);
