import {test} from "@playwright/test";


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
    await page.locator("//p[text()='Sales']").click();

    // Step 4: Click on Leads tab
    await page.locator("//span[text()='Leads']/preceding::a[@title='Leads']").click();

    // Step 5: Click on New button
    // await page.getByRole('link', {name: "button"}).click();
    await page.locator("//a[@title='New']").click();

    // Step 6: Select Salutation dropdown
    // await page.selectOption("//button[@name='salutation']", {label: "Mr."});
    await page.locator("//button[@name='salutation']").click();
    await page.locator("//*[text()='Mr.']").click();
    
    // Step 7: Enter Last Name
    await page.locator("//input[@name='lastName']").fill("Potter");

    // Step 8: Enter Company Name
    await page.locator("//input[@name='Company']").fill("Hogwarts");

    // Step 9: Click on Save button and verify the lead is created
    // await page.getByRole('button', {name: 'Save'}).click();
    await page.locator("//button[@name='SaveEdit']").click();
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'leadCreated.png'});

});