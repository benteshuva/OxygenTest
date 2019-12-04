web.transaction('Defining script variables');
var po = require('./po.js');
var common = require('./common.js');
//var po = require('./po-adv.js');

web.transaction("Opening browser and entering the website");
web.init();
web.open('http://automationpractice.com/index.php');
web.selectWindow('title=My Store');

web.transaction("Searching an item");
web.click(po.homePage.searchFld);
web.type(po.homePage.searchFld, 't shirt');
web.click(po.homePage.firstChoiceSelect);

web.transaction("Final validation - found the right item")
web.assertText(po.productsPage.productName, 'Faded Short Sleeve T-shirts');
