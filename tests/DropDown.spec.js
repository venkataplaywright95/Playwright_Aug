


import {test,expect,Page, chromium} from '@playwright/test'

//import { CommonFunctions } from '../Utilities/commonfunctions'
import { it } from 'node:test'
import { fileURLToPath } from 'url'


test("Launch app",async ({page})=>{

    let login=new CommonFunctions(page)
  await   login.launchURL("https://www.amazon.in/")


  const pagetitle= await login.getPageTitle()

  console.log(`The page title is ${pagetitle}`)
    // await page.waitForTimeout(5000)
    // await login.login("standard_user","secret_sauce")
       await page.waitForTimeout(5000)

await login.searchProduct("pen")
   await page.waitForTimeout(5000)
   await expect(login.resultssymmery).toContainText("results for")

})



test("Length",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

      await page.waitForTimeout(5000)
      const len=await page.locator("//p[text()='Username : Admin']").textContent()
      console.log("lenth of the string is:"+ len?.length)
      if(len){
console.log("the len of hte username text is:"+len.length)
         expect(len.length).toBeGreaterThan(15)
      }
      else{
        console.log("No username")
      }
})


test("Totoal no of links ",async ({page})=>{

        let login=new CommonFunctions(page)
  await   login.launchURL("https://www.amazon.in/")


  const pagetitle= await login.getPageTitle()

  console.log(`The page title is ${pagetitle}`)
    // await page.waitForTimeout(5000)
    // await login.login("standard_user","secret_sauce")
       await page.waitForTimeout(5000)

await login.searchProduct("pen")
   await page.waitForTimeout(3000)
   await expect(login.resultssymmery).toContainText("results for")

   const nooflinks=await page.$$(".a-truncate-cut")

   console.log("No of links:"+nooflinks.length)
      await page.waitForTimeout(5000)
if(nooflinks.length > 0){
    await nooflinks[2].click()
}
else
{
    console.log("no links")
}
   await page.waitForTimeout(5000)
})




test("Iteration",async ({page})=>{

await page.goto("https://www.tutorialspoint.com/selenium/practice/webtables.php")


const rows=await page.locator("table tbody tr").all()


for(const value of rows){

    const salarttext=await value.locator("td").nth(4).textContent()

    const salary=Number(salarttext?.trim())

if(salary>=12000){
    await value.locator(".delete-wrap.confirmdeletebtn").click()
    console.log(`deleted row ${salary}`)
    await page.waitForTimeout(3000)
}
}



})




test("Amazon",async ({page})=>{

await page.goto("https://www.amazon.in/")


    await page.waitForTimeout(3000)


    const items= await page.locator("#nav-xshop-container ul li").all()
    console.log(items.length)
   // console.log("Totle items:"+ items)
    for(const value of items){

        const text=await value.locator('a').textContent()
        console.log("text is"+text)
        // if(text === 'Mobiles'){

        //     await value.click()
        //     break
        // }

        // const links= await value.$('a')
        // const linktext= await links?.innerText()
        // if(linktext){

        //     console.log(linktext)

        //     if(linktext.trim() === 'Mobiles'){
        //         console.log("click on mobles")

        //         await links?.click()
        //         break;

        //     }
        //}


    }

await page.waitForTimeout(3000)


})


test("Check Boxes",async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.waitForTimeout(3000)

    const checkboxes= await page.$$("input[type='checkbox']")
    console.log("total checboxes"+checkboxes.length)

    for(let i=0;i<=checkboxes.length;i++){

        const ischecked=await checkboxes[i].isChecked()
        if(!ischecked){

            await checkboxes[i].click()
           // await page.waitForTimeout(4000)
        }
    }


     for(let i=0;i<=checkboxes.length;i++){

        const ischecked=await checkboxes[i].isChecked()
        expect(ischecked).toBe(true)
    }


})


test("Dropdown",async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.waitForTimeout(3000)

    const stateDD=await page.locator("#state")
    const dd=stateDD.locator("option")

  const count=await dd.count()
  console.log(count)

let isRah=false
  for(let i=0;i<=count;i++){

    const optiontext=await dd.nth(i).innerText()
    console.log(optiontext)
    if(optiontext.trim()=== 'Rajasthan')
    {
        isRah=true
        await stateDD.selectOption({label:'Rajasthan'})
        break
    }
  }
   
expect(isRah).toBe(true)

})  



test("Dropdown a",async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.waitForTimeout(3000)

await page.locator("#state").selectOption({label:'Rajasthan'})

  await page.waitForTimeout(3000)
    

})  


test("inputvalue",async({page})=>{

    //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)

    //await page.locator("#searchDropdownBox").selectOption("Alexa Skills")
        await page.waitForTimeout(3000)

         const defaulttext=await page.locator("#searchDropdownBox option:checked").textContent()
         expect(defaulttext).toBe("All Categories")
           await page.waitForTimeout(3000)

            const count=await page.locator("#searchDropdownBox option").count()
            console.log(count)
            expect(count).toBe(46)
        
})  

test("custom dd",async({page})=>{

    //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(3000)
await expect(page.locator(".oxd-topbar-header-title")).toBeVisible()
await page.locator(".oxd-userdropdown-tab").click()
await page.locator("[role='menuitem']",{hasText:'Support'}).click()
await page.waitForTimeout(1000)
await expect (page.locator(" .orangehrm-sub-title")).toHaveText("Customer Support")

await page.locator(".oxd-main-menu-item",{hasText:'Leave'}).click()
await page.waitForTimeout(1000)
await page.locator(".oxd-multiselect-wrapper .oxd-select-text ").click()
await page.waitForTimeout(1000)
await page.locator(".oxd-select-option",{hasText:'Cancelled'})
await expect (page.locator(".oxd-chip.oxd-chip")).toBeVisible()
await page.waitForTimeout(4000)

   
        
})  



test("auto suggestions",async({page})=>{

    //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
 //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.goto("https://www.amazon.in/")

     await page.locator("[role='searchbox']").fill("book")
    await page.waitForTimeout(3000)
    await page.waitForSelector(".left-pane-results-container")
    await expect(page.locator(".left-pane-results-container")).toBeVisible()
     await page.waitForTimeout(3000)

     const countofoptions=await page.locator("[id*='sac-suggestion-row']").count()
await expect (page.locator("[id*='sac-suggestion-row']")).toHaveCount(20)

     console.log(countofoptions)

  const options=await page.locator("[id*='sac-suggestion-row']").allTextContents()

  console.log(options)


  await expect(page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first()).toBeVisible()
 // await page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first().click()


 const opt=await page.locator("[id*='sac-suggestion-row']").all()


 for(const ele of opt){
const te=await ele.textContent();
if(te && te.includes("bookmark")){

  await ele.click()
  break
   await page.waitForTimeout(3000)
}


 }

  //await page.waitForTimeout(4000)
    
})  



test("pagenation",async ({page})=>{


  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.waitForTimeout(3000)
  const table=await page.locator("#productTable")

  const columns= await table.locator("thead tr th")

  console.log("No of columns"+ await columns.count())
  expect(await columns.count()).toBe(4)


  const rows=await table.locator("tbody tr")
  console.log("No of rows"+ await rows.count())

  expect(await rows.count()).toBe(5)

//   const mathcedRow= rows.filter({
//     has: page.locator('td'),
//     hasText: 'Laptop'

//   })

// await mathcedRow.locator('input').check()


await selectProduct(rows,page,"Laptop")
await selectProduct(rows,page,"Tablet")
await selectProduct(rows,page,"Smartphone")
await page.waitForTimeout(3000)


})

async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
  })
  await matchedRow.locator('input').check()
}



test("pagenation data",async ({page})=>{


  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.waitForTimeout(3000)
  const table=await page.locator("#productTable")

  const columns= await table.locator("thead tr th")

  console.log("No of columns"+ await columns.count())
 


  const rows=await table.locator("tbody tr")
  console.log("No of rows"+ await rows.count())



     for(let i=0;i<await rows.count();i++){

const td=rows.nth(i)
const tds=td.locator('td')

      for(let j=0;j<await tds.count()-1;j++){

      const tabledata=await tds.nth(j).textContent()
      console.log("Table data is:"+tabledata)
      }
     }




})




test("pagenation total pages data", async ({ page }) => {


  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.waitForTimeout(3000)
  const table = await page.locator("#productTable")

  const columns = await table.locator("thead tr th")
  console.log("No of columns" + await columns.count())
  const rows = await table.locator("tbody tr")
  console.log("No of rows" + await rows.count())

  const pages = await page.locator("#pagination li a")
  const totalpages = await pages.count()
  console.log("Total pages" + totalpages)


  for (let p = 0; p < totalpages; p++) {

    if (p > 0) {
      await pages.nth(p).click()
    }


    for (let i = 0; i < await rows.count(); i++) {

      const td = rows.nth(i)
      const tds = td.locator('td')

      for (let j = 0; j < await tds.count() - 1; j++) {

        const tabledata = await tds.nth(j).textContent()
        console.log("Table data is:" + tabledata)
      }
    }

    await page.waitForTimeout(3000)
  }


})



test(" auto suggestions dd",async({page})=>{

    //await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
 //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

     await page.goto("https://www.amazon.in/")

     await page.locator("[role='searchbox']").fill("book")
    await page.waitForTimeout(3000)
    await page.waitForSelector(".left-pane-results-container")
    await expect(page.locator(".left-pane-results-container")).toBeVisible()
     await page.waitForTimeout(3000)

     const countofoptions=await page.locator("[id*='sac-suggestion-row']").count()
await expect (page.locator("[id*='sac-suggestion-row']")).toHaveCount(20)

     console.log(countofoptions)

  const options=await page.locator("[id*='sac-suggestion-row']").allTextContents()

  console.log(options)


  await expect(page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first()).toBeVisible()
 // await page.locator("[id*='sac-suggestion-row']",{hasText:'bookmark'}).first().click()


 const opt=await page.locator("[id*='sac-suggestion-row']").all()


 for(const ele of opt){
const te=await ele.textContent();
if(te && te.includes("bookmark")){

  await ele.click()
   await page.waitForTimeout(3000)
}


 }

  await page.waitForTimeout(4000)   
  
})  


test("Webtable ",async ({page})=>{


  await page.goto("https://letcode.in/table")
  await page.waitForTimeout(3000)


  const table= page.locator("#shopping")
  const tbdoy= table.locator("tbody")
  const tffot= table.locator("tfoot")

  const totalRows=await tbdoy.locator("tr").count()

  console.log("Total no of rows"+ totalRows)
  expect(totalRows).toBe(4)


  let total=0

  for(let i=0;i<totalRows;i++){

const row=await tbdoy.locator("tr").nth(i)
const price= await row.locator("td").last().textContent()
total+=Number(price)

console.log("Total is:"+total)
  }


  const actValue=await tffot.locator('td').last().textContent()
  expect(Number(actValue)).toBe(total)
})



test("Multiple windows",async ()=>{


const browser= await chromium.launch()

const context= await browser.newContext()

const page1= await context.newPage()
const page2= await context.newPage()

const tatalPages= context.pages()
console.log("Toal pages :"+ tatalPages.length)

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle("OrangeHRM")


await page2.goto("https://www.orangehrm.com/")
await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")



})



test("Multiple windows 1",async ()=>{


const browser= await chromium.launch()

const context= await browser.newContext()

const page1= await context.newPage()
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle("OrangeHRM")

const pagePromise= context.waitForEvent('page')

await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
const newPage= await pagePromise;

await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")


await page1.waitForTimeout(2000)
await newPage.waitForTimeout(3000)

await page1.locator("//input[@placeholder='Username']").fill("venkat")
await page1.locator("//input[@placeholder='Password']").fill("venkat")
await page.locator("//button[normalize-space()='Login']").click()
await page1.waitForTimeout(3000)

await newPage.locator("//input[@id='Form_submitForm_action_request']").click()
await newPage.waitForTimeout(2000)
//await browser.close()


// await page2.goto("https://www.orangehrm.com/")
// await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")



})



test("Multiple windows 2",async ({browser})=>{

  const context=await browser.newContext()

  const page=await context.newPage()

  await page.goto("https://training.rcvacademy.com/")

  await page.waitForTimeout(3000)


  const[newPge]= await Promise.all([


    context.waitForEvent('page'),
     page.locator("(//img)[3]").click() 
  ])
  //await newPage.locator("//button[@id='5']//span[@class='VfPpkd-YVzG2b']").click()
  // await expect(page.locator("//span[text()='Zenler']")).toBeVisible()
     await newPge.waitForTimeout(3000)

    await page.locator("(//input[@id='name'])[1]").fill("Venakt")
        await page.waitForTimeout(3000)

  



})



test("Multiple windows 3",async ()=>{

  const browser=await chromium.launch()

  const context=await browser.newContext()

  const page= await context.newPage()

  await page.goto("https://demoqa.com/browser-windows")

  await page.waitForTimeout(3000)


  const [newPage]=await Promise.all([


    page.waitForEvent('popup'),
    await  page.locator("//button[@id='tabButton']").click()
  ])
  
await page.waitForLoadState()

console.log("New Url is:"+ newPage.url())
  
await expect(newPage.locator("//h1[@id='sampleHeading']")).toContainText("This is a sample page")


})



test("Multiple windows 4",async ()=>{

  const browser=await chromium.launch()

  const context=await browser.newContext()

  const page= await context.newPage()

  await page.goto("https://demoqa.com/browser-windows")

  await page.waitForTimeout(3000)


  const [newWindow]=await Promise.all([


    context.waitForEvent('page'),
      page.locator("//button[@id='windowButton']").click()
  ])
  
await newWindow.waitForLoadState()

console.log("New Url is:"+ newWindow.url())
  


})




test("file upload",async ({page})=>{

  await page.goto("https://the-internet.herokuapp.com/upload")
  const[filechooser] =await Promise.all([
  page.waitForEvent('filechooser'),
  page.locator("#file-upload").click()
  ])

  await filechooser.setFiles("testdata/Login_Data.xlsx")
  await page.locator("#file-submit").click()
  await page.waitForTimeout(5000)
})


test("file downlaod",async ({page},testinfo)=>{

  await page.goto("https://the-internet.herokuapp.com/download")
  const[downlaod] =await Promise.all([
  page.waitForEvent('download'),
  page.locator("//a[normalize-space()='file_1753198295231.pdf']").click()
  ])

  const suggestedName=  downlaod.suggestedFilename()

await downlaod.saveAs('./'+suggestedName + "downloaded")
  await page.waitForTimeout(5000)
  await testinfo.attach('downloaded',{path:suggestedName})
})




import { ElementMethods } from '../Utilities/Utilities'
test("Reusable methods",async({page})=>{

const ele=new ElementMethods(page)
await ele.launchURL("https://rahulshettyacademy.com/client/#/auth/login")

//await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.waitForTimeout(3000)


await ele.enterUsernamepassword("venkat","venkat")
await page.waitForTimeout(3000)
// await ele.FillInput("//input[@id='userEmail']","venkat")
// await page.waitForTimeout(3000)
// await ele.FillInput("//input[@id='userPassword']","venkat")
// await ele.clickeElement("//input[@id='login']")
// await page.waitForTimeout(5000)

})








test.only("Before Each 1",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})

test.only("Before each 2",async({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})

test.only("Before each 3",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})

test.only("Before each 4",async({page})=>{

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})

test.describe.only("this is describe block",async()=>{

  test.beforeEach(async ({page})=>{

console.log("this is before each")
//await page.goto("https://demoqa.com")

})

test("inside decribe blockBefore each 1",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})

test("inside decribe blockBefore each 2",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})
test("inside decribe blockBefore each 3",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
let tilte=await page.title()

console.log(tilte)
await expect(page).toHaveTitle(tilte)

})


})

let page

test.beforeAll("before all",async ({browser})=>{
  
page= await browser.newPage()

await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
})