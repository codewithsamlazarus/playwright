import {chromium, test, webkit} from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";


test(`Launch RedBus in Edge`, async ()=>{
    const browser = await chromium.launch({channel:"msedge", headless:false});
    const context = await browser.newContext();
    const pageEdge = await context.newPage();
//  const pageEdge1 = await context.newPage();
    await pageEdge.goto("https://www.redbus.in/");
    let edgePageTitle = await pageEdge.title();
    if(edgePageTitle == 'redBus: Bus Tickets from ₹299 and up to 50% off train tickets'){
        console.log(`The title matches`);
    }
})

test(`Launch Flipkart in Webkit`, async ()=>{
    const browser = await webkit.launch({headless:false});
    const context = await browser.newContext();
    const pageWebkit = await context.newPage();
    await pageWebkit.goto("https://www.flipkart.com/");
    let webKitPageTitle = await pageWebkit.title();
    if (webKitPageTitle == `Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com`) {
        console.log(`The title matches`);
    }
})