import {expect, test} from "@playwright/test";


test("Create a Lead in the Salesforce Application", async({page}) => {

    // Step 1: Login to Salesforce Application
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();

    // Step 2: Click on Toggle manu from the left corner
    await page.getByRole('button', {name: 'App Launcher'}).click();

    // Step 3: Click View All and Select Sales from App Launcher
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Individuals']").click();

    // Step 4: Click on the dropdown icon in the Individuals tab
    await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']//a[@role='button']//lightning-primitive-icon[@exportparts='icon']").click();

    // Step 5: Click on New Individual
    await page.locator("//span[text()='New Individual']").click();

    // Step 6: Enter the Last Name
    let lastNameExpected = "Potter";
    await page.locator("input[placeholder='Last Name']").fill(lastNameExpected);

    // Step 7: Click save and verify the individual is created
    await page.locator("//span[text()='Save']").click();
    await page.waitForTimeout(5000);
    await page.screenshot({path: './screenshots/IndividualCreated.png'});

    let lastNameActual = await page.locator(`//span[@class ='uiOutputText' and text()='${lastNameExpected}']`).innerText();
    expect(lastNameActual).toBe(lastNameExpected);
    

});