import { test  } from "@playwright/test";
import path from "path";


test(`Learn fileUpload`,async ({page}) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    //Case1: when we have type="file" in DOM we are not clicking the button to upload the file rather we will inject the file directly using the method called setInputFiles()
    const uploadFile = page.locator(`(//input[@type="file"])[1]`)
    await uploadFile.setInputFiles([path.join(__dirname,'../../Data/learningFileUpload.txt'),path.join(__dirname,'../../Data/learningFileUpload2.txt')])
    await page.waitForTimeout(3000)
   
})

 //Case2 when we don't have type="file" in DOM
 test(`File Upload - DOM without type="file"`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    const filePromise = page.waitForEvent("filechooser"); // listner for upload action
    await page.locator(`//div[@id="drag-drop-upload"]`).click();
    const fileUpload = await filePromise
    await fileUpload.setFiles(path.join(__dirname,'../../data/learningFileUpload.txt'))
    await page.waitForTimeout(3000)

})