import { LeadPage } from "./04-leadPage";
import { faker } from "@faker-js/faker";
// import { csv } from "../../Playwright TestLeaf/data/CSVData";

export class CreateAccountPage extends LeadPage{


    async enterMandatoryDetails(){
        await this.lppage.locator(`#accountName`).fill(faker.company.buzzNoun());
        // await this.lppage.locator(`#accountName`).fill(csv.accountName);
    }
    
    async clickSubmit(){
        await this.lppage.locator(`.smallSubmit`).click()
        await this.lppage.waitForTimeout(3000)
    }
}
