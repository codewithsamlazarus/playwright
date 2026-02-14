import test from "@playwright/test";


test("Automate Frames in W3Schools", async ({page}) =>{
    
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    page.once("dialog", async (alert)=>{
        await alert.accept();
    })

    const frame = page.frameLocator("#iframeResult");
    await frame.locator("//button[text()='Try it']").click();
    console.log(await frame.locator('#demo').innerText())
    await page.waitForTimeout(2000)

})