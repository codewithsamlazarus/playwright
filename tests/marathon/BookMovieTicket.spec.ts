import test from "@playwright/test";


test("Book Movie Ticket in the Marathon Section", async({page}) => {

    // Step 1: Launch the browser and open PVR Cinemas
    await page.goto("https://www.pvrcinemas.com/");

    // Step 2: Select the city as Chennai
    await page.locator("//h6[text()='Chennai']/preceding-sibling::img").click();

    // Step 3: Choose Cinema from the available list
    await page.locator("")

});