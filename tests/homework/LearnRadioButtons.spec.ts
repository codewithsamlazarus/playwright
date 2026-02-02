import test, { expect } from "@playwright/test";


test("Learn Radio Buttons in the Homework Section", async({page}) => {

    await page.goto("https://leafground.com/radio.xhtml");
// Step 2 - Identify and assert the default selected radio button
    let defaultSelected = await page.locator("//*[contains(@class,'ui-state-default ui-state-active')]/../following-sibling::label").all();  
    for (let i = 0; i < defaultSelected.length; i++) {
        console.log(`Names of the Radio Buttons selected default ${await defaultSelected[i].innerText()}`);
        expect(await defaultSelected[i].isChecked()).toBe(true);
    }

// Step 3 - Click your most favorite browser and assert that the browser is enabled.
    let chromeBrowser = page.locator("(//label[text()='Chrome'])[1]");
    // await chromeBrowser.isEnabled();
    expect(await chromeBrowser.isEnabled()).toBeTruthy();
    await chromeBrowser.click();

// Step 4 - Click one of the cities
    await page.click("//label[text()='Bengaluru']");

// Step 5 - Select the age group and assert the default selected button
    let defaultSelectedAgeGroup = page.locator("//h5[text()='Select the age group (only if not selected)']/following-sibling::div//div[@class='ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active']/../following-sibling::label").innerText();
    console.log(`Default selected age group is: ${defaultSelectedAgeGroup}`);
    page.locator("//label[text()='1-20 Years']").click();
});