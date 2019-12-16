web.transaction('Defining script variables');
var po = require('./po.js');
var common = require('./common.js');
//var po = require('./po-adv.js');
var email = 'cbtesting1337@gmail.com';
var password = 'q1w2e3r4';

web.transaction("Opening browser and entering the website");
web.init();
web.open('http://automationpractice.com/index.php');
web.selectWindow('title=My Store');

web.transaction("Login");
common.Login(email,password);

web.transaction("Navigating to products");
web.click(po.homePage.shirtsBtn);
web.selectWindow('title=T-shirts - My Store');

web.transaction("Selecting a product and adding to cart");
web.click(po.productsPage.shirtImg);
web.waitForExist(po.productsPage.productFrame);
web.pause(2000);
web.selectFrame(po.productsPage.productFrame);
web.pause(2000);
web.click(po.productsPage.addCartBtn);

web.selectFrame("top");
web.waitForText(po.productsPage.addedLbl, 'Product successfully added to your shopping cart');
web.click(po.productsPage.exitPopUp);

web.transaction("Validating the product was added to the cart")
web.click(po.navBar.myCart);
web.selectWindow('title=Order - My Store');
web.waitForText(po.myCartPage.productAdded, 'SKU : demo_1');
