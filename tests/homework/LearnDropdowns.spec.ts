import test from "@playwright/test";

// setTimeout(()=> {debugger},(5000))

test("Learn Dropdowns in the Homework Section", async({page}) => {
    
    // Step 1: Navigate to LeafGround home page
    await page.goto("https://leafground.com/select.xhtml");

    // Step 2: Select your favorite UI automation tool using the different select options
    await page.selectOption("select[class='ui-selectonemenu']", {label: "Playwright"});

    // Step 3: Get the count and print of all the values
    let allOptions = await page.locator("//select[@class='ui-selectonemenu']/option").all();
    console.log(`Favorite tool dropdown options count: ${allOptions.length}`);
    for(let i=0; i<allOptions.length; i++){
        console.log(await allOptions[i].innerText());
    }

    // Step 4: Select your preferred country
    await page.locator(`//label[text()='Select Country']`).click();
    await page.locator(`//li[text()='USA']`).click();

    // Step 5: Confirm Cities belongs to Country is loaded
    await page.locator(`//label[text()='Select City']`).click();        
    let newYork = page.locator(`//li[text()='New York']`);
    if(await newYork.isVisible()){
        console.log("City loaded successfully");
    }

    // Step 6: Choose any three courses from the dropdown
    await page.locator(".ui-button-text").nth(0).click();
    await page.locator("//li[text()='Playwright']").click();
    await page.locator(".ui-button-text").nth(0).click();
    await page.locator("//li[text()='Selenium WebDriver']").click();
    await page.locator(".ui-button-text").nth(0).click();
    await page.locator("//li[text()='PostMan']").click();

    // Step 7: Choose a language and print all the options from the dropdown
    await page.locator(`//label[text()='Select Language']`).click();
    await page.locator(`//li[text()='Hindi']`).click();
    let allLanguages = await page.locator(`//li[text()='Select Language']/following-sibling::li`).all();
    for (let i = 0; i < allLanguages.length; i++) {
        console.log(await allLanguages[i].innerText());
    }
    
    // Step 8: Select 'Two' irrespective of the language chosen
    await page.locator(`//label[text()='Select Values']`).click();
    let languageValue = await page.locator("(//li[text()='Select Values']/following-sibling::li)[1]");
    let selectedLanguage = await languageValue.innerText();
    languageValue.click();
     await page.locator(`//label[text()='${selectedLanguage}']`).click();
    await page.locator("(//li[text()='Select Values']/following-sibling::li)[2]").click();

});