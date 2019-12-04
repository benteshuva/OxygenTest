web.transaction('Defining script variables');
var po = require('./Ben/po.js');
//var po = require('./po-adv.js');

web.transaction("Opening browser and entering the website");
web.init();
web.open('http://automationpractice.com/index.php');
web.selectWindow('title=My Store');

web.transaction("Navigating to new products page.");
web.click(po.navBar.newProducts);
web.selectWindow('title=New products - My Store');

web.transaction("Checking for new products");
web.assertExist(po.navBar.storeLocator);
web.assertExist(po.storesPage.storesHeader);
