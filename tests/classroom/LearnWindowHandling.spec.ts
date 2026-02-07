import test from "@playwright/test";


test.only(`Multiple pages window handling`,async ({page,context}) => {

    await page.goto(`https://www.flipkart.com/`);

    let searchBar = page.locator(`//input[@name='q']`)
    await searchBar.fill("Smartphone")
    await searchBar.press("Enter");

    await Promise.all([context.waitForEvent("page"), page.locator(`//div[normalize-space()='realme P4 Power 5G (TransSilver, 128 GB)']`).click()]);
    
    const allPages = context.pages();

    await page.waitForLoadState("domcontentloaded");

    console.log(await allPages[0].title()); // allPages[0] => parent page reference
    // page.bringToFront()
    console.log(await allPages[1].title()); // allPages[1] => childPage one ref
    
    
})