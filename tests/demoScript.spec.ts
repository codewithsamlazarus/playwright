import { chromium, test } from "@playwright/test";

test(`To launch a browser`, async ()=>{
    const browser = await chromium.launch({channel:"chromium", headless:false});
    const context = await browser.newContext();
    const page1 = await context.newPage();
    // const page2 = await context.newPage();
    await page1.goto("https://www.amazon.in/")
    // await page2.goto("https://www.flipkat.in/")
})
