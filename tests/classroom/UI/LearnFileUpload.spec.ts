import test from "@playwright/test";
import path from "node:path";


test("Upload multiple files", async ({page}) =>{
   
    // 1) Navigate to the URL
    await page.goto(`https://leafground.com/file.xhtml`);
    
    // 2) Wait the upload event and then click the upload button
    const filePromise = page.waitForEvent('filechooser');
    await page.locator(`(//span[text()='Choose'])[2]`).click();

    // 3) Once upload action is done then resolve the download event's promise
    const uploadFile = await filePromise;

    // 4) Upload the file
    await uploadFile.setFiles([path.join(__dirname, `../../data/testleaflogo.png`), 
        path.join(__dirname, `../../data/applelogo.png`)])

    await page.waitForTimeout(5000)

})