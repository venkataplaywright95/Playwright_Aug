import {test,expect} from '@playwright/test';




test.describe('smoke test', () => {
test.describe.configure({mode: 'default'});


test("test1",async ({page}) => {
    console.log("test1");
      await page.waitForTimeout(2000)
        await expect(page).toHaveTitle("Google")

})

test("test2",async ({page}) => {
    console.log("test2");
      await page.waitForTimeout(2000)

})
test("test6",async ({page}) => {
    console.log("test6");
      await page.waitForTimeout(2000)

})
})








test.describe("sanity test",()=>{

    test.describe.configure({mode: 'default'});
    test("test3",async ({page}) => {
        console.log("test3");
        await page.waitForTimeout(2000)
  await expect(page).toHaveTitle("Google")

       
    })
      test("test4",async ({page}) => {
        console.log("test4");
          await page.waitForTimeout(2000)

       
    })
      test("test5",async ({page}) => {
        console.log("test5");
          await page.waitForTimeout(2000)

       
    })
})