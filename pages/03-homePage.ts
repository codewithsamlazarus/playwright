import { WelcomePage } from "./02-welcomePage";


export class HomePage extends WelcomePage {

async clickLead(){
    await this.lppage.locator(`//a[text()="Leads"]`).click()
}

async clickAccounts(){
    await this.lppage.locator(`//a[text()="Accounts"]`).click()
}

}