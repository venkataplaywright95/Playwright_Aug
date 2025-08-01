
/*

import { test, expect } from '@playwright/test';    
import {Login} from '../Pages/SauceDemo';



test("Login to SauceDemo", async ({ page }) => {




    const login = new Login(page);
    await login.navigateTo('https://www.saucedemo.com/');
    await login.login('standard_user', 'secret_sauce');
    expect(await page.title()).toBe('Swag Labs');   

    expect(await page.locator('.title').textContent()).toBe('Products');
    expect(await page.locator('.inventory_item').count()).toBeGreaterThan(0);


    const product = await page.locator(".inventory_item_description")

    console.log("toal products: " + await product.count());


    const prouctName="Sauce Labs Bike Light"
    
    // for(let i=0;i<await product.count();i++){


    //     const productText=await product.nth(i).locator(".inventory_item_name ").textContent();

    //     if(productText===prouctName){
    //        // console.log("Found product: " + productText);
    //         await product.nth(i).locator("//button[text()='Add to cart']").click()
    //         break
    //     }
    // }
await page.waitForTimeout(5000)
    
})



*/

