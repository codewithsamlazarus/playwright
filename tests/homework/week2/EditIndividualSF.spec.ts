import {expect, test} from "@playwright/test";


test("Edit a Lead in the Salesforce Application", async({page}) => {

    // Step 1: Login to Salesforce Application
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();

    // Step 2: Click on Toggle menu from the left corner
    await page.getByRole('button', {name: 'App Launcher'}).click();

    // Step 3: Click View All and Select Sales from App Launcher
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Individuals']").click();

    // Step 4: Click on the dropdown icon in the Individuals tab
    await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']//a[@role='button']//lightning-primitive-icon[@exportparts='icon']").click();

    // Step 5: Search the Individual's Last Name
    let searchBox = await page.locator("//input[@placeholder='Search this list...']");
    await searchBox.fill("Potter");
    await page.keyboard.press('Enter');

    // Step 6: Click on the Dropdown icon and Select Edit
    // await page.locator("a[title='Show 2 more actions']").click();
    await page.locator("//td[contains(@data-col-key-value,'ListViewRowLevelAction')]//button").nth(1).click();
    await page.locator("//*[text()='Edit']").click();

    // Step 7: Select Salutation as 'Mr'
    await page.locator("(//a[text()='--None--'])[1]").click();
    await page.locator("//a[text()='Mr.']").click();

    // Step 8: Now enter the first name
    let firstNameElement = page.getByLabel('First Name')
    firstNameElement.fill('Harry');
    firstNameElement.press('Enter');

    // Step 9: Click on Save and Verify the first name 
    await page.locator("//span[text()='Save']").click();
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'individualCreated.png'});

});