import { chromium, test } from '@playwright/test';

test('Launch browser and verify title', async () => {
    const browserInstance = await chromium.launch({ headless: false, channel: 'chrome'});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto('https://www.google.com/');
});