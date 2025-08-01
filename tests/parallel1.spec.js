import { test, expect } from '@playwright/test';






test("parallel", async ({ page }) => {
  console.log("test1");
  //await page.waitForTimeout(2000)
  //await expect(page).toHaveTitle("Google")


})

test("parallel tc-1", async ({ page }) => {
  console.log("test2");
  //await page.waitForTimeout(2000)
 // await expect(page).toHaveTitle("Google")

})
test("tc-2", async ({ page }) => {
  console.log("test6");
  //await page.waitForTimeout(2000)
  //await expect(page).toHaveTitle("Google")
})





test("tc-3", async ({ page }) => {
  console.log("test3");
  //await page.waitForTimeout(2000)
  //await expect(page).toHaveTitle("Google")


})
test("parallel tc-4", async ({ page }) => {
  console.log("test4");
  //await page.waitForTimeout(2000)


})
test("parallel tc-5", async ({ page }) => {
  console.log("test5");
  //await page.waitForTimeout(2000)
  //await expect(page).toHaveTitle("Google")


})
