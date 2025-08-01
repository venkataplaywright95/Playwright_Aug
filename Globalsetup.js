
const { chromium, expect,page,test } = require('@playwright/test');

async function globalSetup() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill('standard_user');
    await page.locator("#password").fill('secret_sauce');
    await page.locator("#login-button").click();
    const title = await page.title();
    expect(title).toBe('Swag Labs');
    await page.waitForURL("**/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await page.context().storageState({ path: './LoginAuth.json' });
    await browser.close();

}


export default globalSetup;