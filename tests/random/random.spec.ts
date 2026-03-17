import { test } from '@playwright/test';


test(`Random test`, async ({page, context}) => {

    page.on(`dialog`, async alert => {
        await alert.accept();
    });

    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.locator(`#username`).fill(`DemoCSR`)
    await page.locator(`#password`).fill(`crmsfa`)
    await page.locator(`.decorativeSubmit`).click()

    await page.locator(`a:has-text("CRM/SFA")`).click()
    await page.locator(`a:has-text("Contacts")`).click()

    await page.locator(`a:has-text("Merge Contacts")`).click()

    const [window1] = await Promise.all([context.waitForEvent(`page`), page.getByRole(`img`, {name: `Lookup`}).nth(0).click()]);
    await window1.locator(`a:has-text("dp1a1contact1")`).nth(0).click()
    // await page.bringToFront();

    const [window2] = await Promise.all([context.waitForEvent(`page`), page.getByRole(`img`, {name: `Lookup`}).nth(1).click()]);
    await window2.locator(`a:has-text("dp1a1contact2")`).nth(0).click()

    await page.getByRole(`link`, {name: `Merge`, exact: true}).click()

});