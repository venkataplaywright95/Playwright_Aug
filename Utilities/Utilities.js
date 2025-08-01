
import {test,page,locator} from '@playwright/test'
 export class ElementMethods{

    constructor(page){
        this.page=page
        this.username=page.locator("//input[@id='userEmail']")
        this.password= page.locator("//input[@id='userPassword']")
        this.loginBtn= page.locator("//input[@id='login']")
    }

    async FillInput(locator,value){

await this.page.waitForSelector(locator,{state:'visible'})
await this.page.fill(locator,value)
    }

    async clickeElement(locator){


        await this.page.locator(locator)
    }

async launchURL(url){

    await this.page.goto(url)
}
    async enterUsernamepassword(username,password){

        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}
