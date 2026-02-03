import {test, expect } from "@playwright/test";


test('Learn Auto Waits in the Homework Section', async ({ page }) => {

    // Step 1 - Navigate to the Auto Waits page
    await page.goto("https://leafground.com/waits.xhtml");
    
    // Step 2 - Wait for an element to become visible before interacting with it
    await page.locator(`(//span[@class='ui-button-text ui-c'][normalize-space()='Click'])[1]`).click();
    let amHereButton = page.locator(`//span[text()='I am here']`);
    await amHereButton.waitFor({ state: 'visible' });
    await amHereButton.click();

    // Step 3 - Wait for an element to disappear from the page
    await page.locator(`(//span[text()='Click'])[2]`).click();
    let hideButton = page.locator(`//span[text()='I am about to hide']`);
    await hideButton.waitFor({ state: 'hidden' });

    // Step 4 - Wait for an element to become clickable
    await page.locator(`//span[text()='Click First Button']`).click(); //span[text()='Click Second']
    let clickSecondButton = page.locator(`//span[text()='Click Second']`);
    await clickSecondButton.waitFor({ state: 'visible' });

    // Step 5 - Check for text changes within an element and respond accordingly.
    await page.locator(`(//span[text()='Click'])[3]`).click();

    // Step 6 - Assert the various actions performed on the page
    let didYouNotice = page.locator(`//span[text()='Did you notice?']`);
    await didYouNotice.waitFor({ state: 'visible' });
    expect(await didYouNotice.isVisible()).toBeTruthy();

});