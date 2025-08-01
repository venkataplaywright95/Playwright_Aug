





const {test, expect,chromium} = require('@playwright/test');



//test.use({storageState:'./LoginAuth.json'})
test("Sample Test", async ({page}) => {


     await page.goto("https://www.saucedemo.com/");
    //    await page.fill('#user-name', 'standard_user');
//    await page.fill('#password', 'secret_sauce');
//    await page.click('#login-button');   
    // const title = await page.title();   
    // expect(title).toBe('Swag Labs');
    // await page.waitForURL("**/inventory.html");
    // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")


})


test("Sample Test 2", async ({page}) => {

 await page.goto("https://www.saucedemo.com/");

//await page.title()
//console.log("Page title is: ", await page.title());

})


test("Sample Test 3", async ({page}) => {
//await page.context().clearCookies();
 await page.goto("https://www.saucedemo.com/");

//await page.title()
//console.log("Page title is: ", await page.title());

})

test("Sample Test 4", async ({page}) => {
//await page.context().clearCookies();
 await page.goto("https://www.saucedemo.com/");

//await page.title()
//console.log("Page title is: ", await page.title());

})
test("Sample Test 5", async ({page}) => {
//await page.context().clearCookies();
 await page.goto("https://www.saucedemo.com/");

//await page.title()
//console.log("Page title is: ", await page.title());

})
test("Sample Test 6", async ({page}) => {
//await page.context().clearCookies();
 await page.goto("https://www.saucedemo.com/");

//await page.title()
//console.log("Page title is: ", await page.title());

})

