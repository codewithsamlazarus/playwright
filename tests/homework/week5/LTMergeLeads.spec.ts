import {test, expect} from "@playwright/test";

test('Salesforce Login Test', async ({page, context}) => {

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    page.on('dialog', async (alert) => {
        console.log(await alert.message());
        await alert.accept();
    })

    await expect(page.locator('#username')).toBeEditable();
    await page.locator('#username').fill("demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('link', {name: 'CRM/SFA'}).click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Merge Leads")').click();

    const newPage = context.waitForEvent('page');
    await page.locator(`(//img[@src='/images/fieldlookup.gif'])[1]`).click();
    const childPage1 = await newPage;

    await childPage1.locator(`(//div[9]//table//a[@class='linktext'])[1]`).click();

    const newPage2 = context.waitForEvent('page');
    await page.locator(`(//img[@src='/images/fieldlookup.gif'])[2]`).click();
    const childPage2 = await newPage2;

    await childPage2.locator(`(//div[10]/table//a[@class='linktext'])[1]`).click();
    await page.locator(`//a[text()='Merge']`).click();

    await page.waitForTimeout(5000);

    const title =await page.title();
    console.log(title);
    expect(title).toBe("View Lead | opentaps CRM");

    await page.waitForTimeout(10000);

});