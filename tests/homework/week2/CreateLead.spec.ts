import {test, expect} from "@playwright/test";

test('Salesforce Login Test', async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await expect(page.locator('#username')).toBeEditable();
    await page.locator('#username').fill("demosalesmanager");
    await expect(page.locator('#password')).toBeDisabled({timeout: 5000});
    await page.locator('#password').fill("crmsfa");
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('link', {name: 'CRM/SFA'}).click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Create Lead")').click();
    await page.locator('#createLeadForm_companyName').fill("Deloitte");
    await page.locator('#createLeadForm_firstName').fill("Sam");
    await page.locator('#createLeadForm_lastName').fill("Lazarus");
    await page.locator('#createLeadForm_personalTitle').fill("Mr");
    // await page.getByLabel('Annual Revenue').fill("100000");
    await page.locator('#createLeadForm_annualRevenue').fill("100000");
    await page.locator('#createLeadForm_departmentName').fill("Consulting");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876543210");

    await page.selectOption('#createLeadForm_dataSourceId', {value: 'LEAD_DIRECTMAIL'});

    const currencyDropdownOptions =await page.locator("//select[@id='createLeadForm_currencyUomId']/option");
    let currencyDropdownOptionsCount = await currencyDropdownOptions.count();
    
    for (let i = 0; i < currencyDropdownOptionsCount; i++) {
        console.log(await currencyDropdownOptions.nth(i).innerText());
    }

    await page.selectOption('#createLeadForm_currencyUomId', {label: 'CHF - Swiss Franc'});

    await page.selectOption('#createLeadForm_industryEnumId', {index: 2});

    await page.locator('.smallSubmit').click();
    
});