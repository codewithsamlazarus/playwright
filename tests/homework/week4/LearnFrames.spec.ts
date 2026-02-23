import {expect, test} from "@playwright/test";


test("Learn to Automate Frames in Playwright", async ({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")
    
    // Step 1 - Interact with the Click Me button inside frame
    let frame1 = page.frameLocator("[src='default.xhtml']");
    await frame1.locator("#Click").click()
    let changedText = await frame1.locator("//button[text()='Hurray! You Clicked Me.']").innerText();
    
    // Step 2 - Assert the text changed after clicking the button
    expect(changedText).toBe("Hurray! You Clicked Me.");
    
    // Step 3 - Get the total count of frames present in the page
    let allFrames = page.frames();
    console.log(allFrames.length);
    // Step 4 - Interact with the Click Me button present inside the nested frames
    let outerFrame = page.frameLocator("[src='page.xhtml']");
    let innerFrame = outerFrame.frameLocator("#frame2");
    await innerFrame.locator("//button[text()='Click Me']").click()
    // Step 5 - Assert the text change
    expect(changedText).toBe("Hurray! You Clicked Me.");

});