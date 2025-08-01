import { test, expect } from '@playwright/test';



const testdata = ["playwright by testers talk", "cypress by testers talk", "javascript by testers talk"]




for (const seacrch of testdata) {


    test(`parametarization ${seacrch}`, async ({ page }) => {

        await page.goto("https://www.youtube.com/");
        await page.waitForTimeout(2000);
        await page.locator("input[placeholder='Search']").click();
        await page.locator("input[placeholder='Search']").fill(seacrch);

        await page.locator("input[placeholder='Search']").press("Enter");
        await page.waitForTimeout(5000);
    })


}