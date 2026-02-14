import {expect, test} from "@playwright/test";


test("Login to Salesforce using Playwright Locators", async({page}) => {

    // Step 1: Login to Salesforce Application
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com");
    await page.getByRole("textbox", {name : "Password"}).fill("TestLeaf@2025");
    await page.getByRole("button", {name : "Log In"}).click();
    await page.getByLabel("Remember me").check();

    let sellerHomeText = await page.getByText("Seller Home").innerText();
    expect(sellerHomeText).toContain("Seller Home");
})