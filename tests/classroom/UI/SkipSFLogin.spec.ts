import { test } from "@playwright/test";

test.use({storageState : "data/login_Salesforce.json"});

test(`Skip SF Login using saved creds`,async ({page}) => {
    
    await page.goto(`https://orgfarm-db518da3a9-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome`);
    await page.getByTitle("App Launcher",{exact:true}).click();
    // await page.getByAltText("Salesforce").isVisible();

});