import test from "@playwright/test";
import path from "path";

test("Learn to download a file using Playwright", async ({page})=>{

    // 1) Navigate to the URL
    await page.goto("https://leafground.com/file.xhtml");

    // 2) Wait for the download event and then click download 
    const filePromise = page.waitForEvent("download");
    page.getByText(`Download`, {exact: true}).click();

    // 3) Once download action is done then resolve the download event's promise
    const fileDownload = await filePromise;

    // 4) Add a date timestamp
    const timeStamp = new Date()
                        .toISOString()
                        .replace(/[:.]/g, "-")

   // 5) Give the local path where the downloaded file to be saved 
    const filePath = path.join
                    (__dirname, `../../data/download_${timeStamp}.png`)

    // 4) Save the downloaded file in that path
    await fileDownload.saveAs(filePath);

    await page.waitForTimeout(5000)
})