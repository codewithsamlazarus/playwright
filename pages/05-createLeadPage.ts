import { LeadPage } from "./04-leadPage";
import { fa, faker } from "@faker-js/faker";

export class CreateLeadPage extends LeadPage{


    async enterMandatoryDetails(){
        await this.lppage.locator(`#createLeadForm_companyName`).fill(faker.company.buzzNoun());
        await this.lppage.locator(`#createLeadForm_firstName`).fill(faker.name.firstName());
        await this.lppage.locator(`#createLeadForm_lastName`).fill(faker.name.lastName())
    }
    
    async clickSubmit(){
        await this.lppage.locator(`.smallSubmit`).click()
        await this.lppage.waitForTimeout(3000)
    }
}
