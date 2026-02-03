import test, { expect } from "@playwright/test";


test("Learn Check Boxes in the Homework Section", async({page}) => {

    // Step 1: Navigate to LeafGround home page
    await page.goto("https://leafground.com/checkbox.xhtml");

    // Step 2: Click on the Basic Check Box
    await page.locator("//span[text()='Basic']/preceding-sibling::div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

    // Step 3: Click on Notification Check Box
    await page.locator("//span[text()='Ajax']/preceding-sibling::div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

    // Step 4: Verify if the Check Box is Selected
    let checkBoxMessage = await page.locator("//span[text()='Checked']");
    expect(checkBoxMessage).toHaveText("Checked");

    // Step 5: Click on Favorite Language Check Box
    await page.locator("//label[text()='Javascript']/preceding-sibling::div[@class='ui-chkbox ui-widget']").click();

    // Step 6: Click on the Tri State Check Box
    await page.locator("//h5[text()='Tri State Checkbox']/following-sibling::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

    // Step 7: Verify which Tri State option has been chosen
    let triStateMessage = await page.locator("//span[text()='State has been changed.']/following-sibling::p").innerText();
    console.log(triStateMessage);
    
    // Step 8: Click on the Toggle Switch
    await page.locator("//h5[text()='Toggle Switch']/following-sibling::div//div[@class='ui-toggleswitch-slider']").click();

    // Step 9: Verify that the expected message is displayed
    // let growlMessage = await page.locator("//div[@class='ui-growl-message']/span").innerText();

    // Step 10: Verify if the checkbox is disabled
    let isElementDisabled = await page.locator("//span[text()='Disabled']/../div[2]").isDisabled();
    expect(isElementDisabled).toBeTruthy();

    // Step 11: Perform any additional actions or verifications required
    await page.locator("//ul[@data-label='Cities']").click();
    await page.locator("//label[text()='Miami']/preceding-sibling::div[@class='ui-chkbox ui-widget']").click();
    await page.locator("//label[text()='Paris']/preceding-sibling::div[@class='ui-chkbox ui-widget']").click();

    await page.screenshot({path: 'learnCheckBoxes.png'});

});

