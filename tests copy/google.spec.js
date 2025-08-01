// @ts-check
import { test, expect } from '@playwright/test';


// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });


const baseURL = process.env.URL ;
// const baseURL = 'https://www.google.com/';
const user = process.env.UserField ;
const pass = process.env.passwordField ;
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });


import {ModuleTEstData} from '../test-data/qa/google.json'

import {qaTestData} from '../test-data/qa/google.json'

import {stageTestData} from '../test-data/stage/google.json'
// import { lookupService } from 'dns';
// import { env } from 'process';


test.describe("module test data",() =>{


  let testData = null;

 test.beforeAll("Running before all tests",() =>{

if(process.env.ENV === 'qa'){
    testData = qaTestData;
  }
else{
  testData = stageTestData;
}
  
 })




test('get started link', async ({ page }) => {
  //await page.goto(`${process.env.URL}`);

  //await page.goto(`${process.env.URL}`);
  await page.goto(`${baseURL}`);
  
  await page.waitForTimeout(5000)

  // await page.locator("#APjFqb").click();
  // await page.waitForTimeout(2000)

  // await page.locator("#APjFqb").fill(testData.Skill1);
  //   await page.locator("#APjFqb").press('Enter');
  // await page.waitForTimeout(5000)



  await page.locator("[name='username']").fill(`${user}`);
    await page.waitForTimeout(5000)

    await page.locator("[name='password']").fill(`${pass}`);
 
  await page.waitForTimeout(5000)





});

})



test.only("Launch Browser", async ({ page }) => {
  // await page.goto(`${process.env.URL}`);
  // await page.goto(`${baseURL}`);
  // await page.waitForTimeout(5000)

console.log(`${"URL IS:"+ process.env.URL}`)
console.log(`${process.env.UserField}`)

console.log(`${process.env.passwordField}`)
console.log(`${process.env.pass}`)
//console.log(`${process.env.pass}`)



  

  // await page.locator("#APjFqb").click();
  // await page.waitForTimeout(2000)

  // await page.locator("#APjFqb").fill(testData.Skill1);
  //   await page.locator("#APjFqb").press('Enter');
  // await page.waitForTimeout(5000)

  // await page.locator("[name='username']").fill(`${user}`);
  //   await page.waitForTimeout(5000)

  //   await page.locator("[name='password']").fill(`${pass}`);
 
  // await page.waitForTimeout(5000)


})



