import {test} from "@playwright/test";

test.setTimeout(120000);    

test('Salesforce Login Test', async ({page}) => {

    await page.goto(`https://login.salesforce.com/`)
    await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('#Login').click()
    await page.waitForURL('https://testleaf.lightning.force.com/lightning/page/home', {timeout: 60000});
        
    // await page.waitForLoadState('domcontentloaded');
    // console.log(await page.title())

});