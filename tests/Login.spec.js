
const {test,expect}=require('@playwright/test')
test.only("Login",async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator("//input[@id='username']").fill("student")
    await page.locator("//input[@id='password']").fill("Password123")
    
    await page.locator("//button[@id='submit']").click()

   await expect(page.locator(".post-title")).toHaveText("Logged In Successfully")
    await page.waitForTimeout(5000)
}) 
