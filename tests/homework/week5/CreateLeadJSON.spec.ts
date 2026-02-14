import {test, expect} from "@playwright/test";
import createLeadTestData from "../../../data/CreateLeadTestData.json";

for (let testData of createLeadTestData){
test(`${testData.TC_ID} - ${testData.TC_Name}`, async ({page}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await expect(page.locator('#username')).toBeEditable();
    await page.locator('#username').fill(testData.username);
    await page.locator('#password').fill(testData.password);
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('link', {name: 'CRM/SFA'}).click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Create Lead")').click();
    await page.locator('#createLeadForm_companyName').fill(testData.companyName);
    await page.locator('#createLeadForm_firstName').fill(testData.firstName);
    await page.locator('#createLeadForm_lastName').fill(testData.lastName);
    await page.locator('#createLeadForm_personalTitle').fill(testData.title);
    // await page.getByLabel('Annual Revenue').fill("100000");
    await page.locator('#createLeadForm_annualRevenue').fill(testData.annualRevenue);
    await page.locator('#createLeadForm_departmentName').fill(testData.departmentName);
    await page.locator('#createLeadForm_primaryPhoneNumber').fill(testData.phoneNumber);

    await page.selectOption('#createLeadForm_dataSourceId', {value: 'LEAD_DIRECTMAIL'});

    const currencyDropdownOptions = page.locator("//select[@id='createLeadForm_currencyUomId']/option");
    let currencyDropdownOptionsCount = await currencyDropdownOptions.count();
    
    // for (let i = 0; i < currencyDropdownOptionsCount; i++) {
        // console.log(await currencyDropdownOptions.nth(i).innerText());
    // }

    await page.selectOption('#createLeadForm_currencyUomId', {label: 'CHF - Swiss Franc'});

    await page.selectOption('#createLeadForm_industryEnumId', {index: 2});

    await page.locator('.smallSubmit').click();
    
})};