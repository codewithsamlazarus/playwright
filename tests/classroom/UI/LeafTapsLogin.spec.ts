import test from "@playwright/test";
import leafTapsCreds from "../../../data/leafTapsTestData.json";

test.describe.parallel(`Login tests in serial mode`, async ()=>{
    
for (const data of leafTapsCreds) {

test(`LeafTaps Login using JSON file ${data.TC_ID}`, async ({page})=>{ 

    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator('#username').fill(data.username)
    await page.locator('#password').fill(data.password)
    await page.locator('.decorativeSubmit').click()
 
})}
})