/* Actionablities :
1. Loading ur.
2. Enter Credentials
3. Click Login */

import {Page,chromium} from "@playwright/test"

class LoginPage{

lppage : Page // lppage ==> globally declared as well as assigned with "page" reference through Lpage local variable  used under constructor method and at

//First step inside a class should be assigning the refrence to the page variable
constructor(Lpage:Page){ // constructor method is invoked first
    this.lppage=Lpage // Lpage is a local varible to capture the page reference passed as an argument through the parameterized constructor 
//Lpage === page (through argument passing)// lppage(global variable) == Lpage asssigned with the value of local variable
//page(constructor argument) --> Lpage(local) --> lppage(global)
}

async loadurl(){
    await this.lppage.goto(`http://leaftaps.com/opentaps/control/main`)
}

async enterCrdentials(){
    await this.lppage.locator(`#username`).fill("democsr")
    await this.lppage.locator(`#password`).fill("crmsfa")
}

async clickLogin(){
    await this.lppage.locator(`.decorativeSubmit`).click()
}

async closeBrowser(){
    await this.lppage.close()
}
}

async function doLogin(){

const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()//p34u5o13

}

doLogin()

export {LoginPage};