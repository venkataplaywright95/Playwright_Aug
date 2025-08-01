import { test, expect } from '@playwright/test';






test("parallel tc-1", async ({ page }) => {
  console.log("test1");
  //await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")


})

test("parallel tc-2", async ({ page }) => {
  console.log("test2");
  //await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")

})
test("parallel tc-6", async ({ page }) => {
  console.log("test6");
  //await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")
})





test("parallel tc-3", async ({ page }) => {
  console.log("test3");
  //await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")


})
test("test4 tc-4", async ({ page }) => {
  console.log("test4");
  await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")

})
test("test5 tc-5", async ({ page }) => {
  console.log("test5");
  //await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")


})
