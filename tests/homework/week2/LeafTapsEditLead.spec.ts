import test from "@playwright/test";


test("Edit Lead in LeafTaps application", async ({page})=>{

    // 1) Launch the application
    await page.goto("http://leaftaps.com/opentaps/control/main");
    // 2) Enter the username
    await page.locator("#username").fill("Demosalesmanager");
    // 3) Enter the password
    await page.locator("#password").fill("crmsfa");
    // 4) Click Login
    await page.getByRole('button', {name: 'Login'}).click();
    // 5) Click crm/sfa link
    await page.getByRole('link', {name: 'CRM/SFA'}).click();
    // 6) Click Leads link
    await page.getByRole('link', {name: 'Leads'}).click();
    // 7) Click on Create Lead
    await page.getByRole('link', {name: 'Create Lead'}).click();
    // 8) Enter Company name
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    // 9) Enter First name
    await page.locator("#createLeadForm_firstName").fill("Harry");
    // 10) Enter Last name
    await page.locator("#createLeadForm_lastName").fill("Potter");
    // 11) Click on Create Lead button
    await page.locator(".smallSubmit").click();
    // 12) Click on Edit button
    await page.getByRole('link', {name: 'Edit'}).click();
    // 13) Clear the existing Company name and Enter new Company name
    const companyName = page.locator("#updateLeadForm_companyName");
    await companyName.clear();
    await companyName.fill("Hogwarts");
    // 14) Click on Update button
    await page.locator("//input[@value='Update']").click();
    await page.waitForTimeout(2000);
    await page.screenshot({path: './screenshots/lead-updated.png'});
});