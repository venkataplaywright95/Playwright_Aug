import { test, expect } from "allure-playwright";


import fs from 'fs';
import { json } from "stream/consumers";
const testdatapath = "testdata/data.json"


const testdata = JSON.parse(fs.readFileSync(testdatapath, 'utf-8'));

for (const user of testdata) {

    test(`Login with user ${user.username}`, async ({ page }, testinfo) => {

        const userFromProject = testinfo.project.use.user


        await page.goto("https://www.saucedemo.com/");
        await page.waitForTimeout(2000);

        await page.locator("#user-name").click();

        await page.locator("#user-name").fill(user.username);
        await page.locator("#password").click();
        await page.locator("#password").fill(user.password);
        await page.locator("#login-button").click();
        await page.waitForTimeout(5000);
    })

}

import dotenv from 'dotenv';
import path from 'path';

// test.only("test env", async ({ page }, testinfo) => {


//     const user = testinfo.project.use.env_var

//     await page.goto("https://www.saucedemo.com/");
//     await page.waitForTimeout(2000);

//     await page.locator("#user-name").click();

//     await page.locator("#user-name").fill(user);
//     await page.waitForTimeout(5000);

// })

test.only("Login",async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator("//input[@id='username']").fill("student")
    await page.locator("//input[@id='password']").fill("Password123")
    
    await page.locator("//button[@id='submit']").click()

    expect(page.locator(".post-title")).toHaveText("Logged In Successfully")
    await page.waitForTimeout(5000)
}) 







