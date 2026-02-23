import { CreateLeadPage } from "./05-createLeadPage";


export class ViewAccountPage extends CreateLeadPage{

    async verifyAccountName(){
        const accName = await this.lppage.locator(`//span[text()='Account Name']/../following-sibling::td/span[@class='tabletext']`).innerText()
        console.log(accName);        
    }
}