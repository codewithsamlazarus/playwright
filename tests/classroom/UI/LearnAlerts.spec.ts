import { test } from "@playwright/test";


test.only(`Test to Handle alerts/dialogs using page.on`,async ({page}) => {
    
    await page.goto(`https://leafground.com/alert.xhtml`);

    // page.on is an event listener to listen for user interaction like clicks and capture the alert/ webelement
    // When page.on is used the control comes to you to handle the alert accordingly
    
    //First Trigger --> alert is holding the simple alert
    //Second Trigger --> alert is holding the confirm alert
    //Third Trigger --> alert is holding the prompt alert
     
    page.on("dialog",async(alert)=>{
    const message = alert.message(); //.message() inbuilt method to get the message out from the alert
       console.log(message);       
    // accept() => Ok and dismiss() => cancel both are inbuilt methods

    const alertType = alert.type(); // .type() inbuilt method to get the type of the alert and to handle it accordingly using an if condition
    console.log(`The type of the alert is ${alertType} `);

    if(alertType==="confirm"){
        await alert.accept()
    }else if(alertType==="prompt"){
        await alert.accept("Testleaf")
    }else

    await alert.dismiss();  // any other alerts other than "confirm" or "prompt" will be handled here and dismissed
    }) 

    //simple alert -> alert triggered
    await page.locator(`(//span[text()="Show"])[1]`).click();
    await page.waitForTimeout(3000)

    //confirm alert -> alert triggered
    //await page.locator(`(//span[text()="Show"])[2]`).click();
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator(`//span[text()="Show"]`).click()
    await page.waitForTimeout(3000)

    //prompt alert -> alert triggered
    //await page.locator(`(//span[text()="Show"])[5]`).click();
    await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator(`//span[text()="Show"]`).click()
    await page.waitForTimeout(3000)

})
