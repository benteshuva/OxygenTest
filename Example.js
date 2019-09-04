//db.setConnectionString("Driver={MySQL ODBC 5.3 UNICODE Driver};Server=localhost;Database=myDatabase; User=myUsername;Password=myPassword;Option=3;");
web.init();
web.open('https://www.mishlohim.co.il/');
web.selectWindow('title=משלוחים Rest - אתר הזמנות משלוחי אוכל ממסעדות הגדול בישראל');
web.type('id=txtArea', '${item1}');
web.click('id=ddlFoodCategories-button');
web.click('//ul[@id=\'ddlFoodCategories-menu\']/li[6]/div');
web.click('id=btnSearchByCityAndFood');
web.selectWindow();
web.waitForExist('css=.search-result-block:nth-child(2) .title');
web.waitForExist('//div[2]/div/div/div[2]/div/a/h3');
var amountOfRest = web.getElementCount("//div[@class='search-result-block close']");
log.info("The amount of restaurants: "+amountOfRest);
var rest =[];
for (var i=1;i<=amountOfRest;i++)
{
   rest[i] = web.getAttribute("(//div[@class='search-result-block close'])["+i+"]",'data-siebel');
   log.info(rest[i]);
}
/*
var query = "select typeOfRestaurant from mishlohim where sebel =";
var restFromDB =[];
for (var i=1;i<=amountOfRest;i++)
{
restFromDB[i] = db.getScalar(query+rest[i]);
}
i=1;
while (rest[i]==restFromDB[i])
{
    i++
}

web.executeScript("var cx=document.querySelector('canvas').getContext('2d');cx.beginPath();cx.moveTo(50, 20);cx.lineTo(60, 70);cx.lineTo(100, 30);cx.stroke();");
*/