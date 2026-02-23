import test from "@playwright/test";

/*
1. Launch any banking website- Open Canara Bank Net Banking page
2. Trigger an alert -click on the Net Banking link
3. Capture the alert using an event listener.
4. Print the alert message and type.
5. Accept or dismiss the alert based on its type.
*/

test(`Handle Alerts in Canara bank application`, async ({page})=>{

    await page.goto(`https://www.canarabank.bank.in/pages/net-banking`);

    await page.waitForTimeout(1500);
    await page.locator(`//a[@id='netbanking-link']`).click()
    page.on(`dialog`, async (alert)=>{
        await alert.accept();
    })
    
})