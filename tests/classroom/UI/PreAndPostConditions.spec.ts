import  test  from "@playwright/test";
import  {parse} from "csv-parse/sync";
import fs from "fs" // fs --> file system to read data from your system

// test.beforAll() // beforeAll annotation is executed first before the execution of any annotation

test.describe.serial(`Test executed in serial mode`, async () => {

// test.describe.configure({ mode: 'serial' }); // to execute the tests in serial mode

let records:any[]

test.beforeAll(`Read data from CSV `,async () => {    
    console.log(`Before all data connectivity`);
    
    records  = parse(fs.readFileSync("data/login.csv"),{columns:true,skip_empty_lines:true})

})

test.beforeEach(`Read data from CSV `,async ({page,context}) => { 
//here the account module and lead module has to pass through login functionality each time when the test is executed
    console.log(`Before each test execution of lead and account moddule`);
    
    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(records[0].username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(records[0].password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click(); 
})


test(`Lead Creation`,async ({page}) => {
     console.log(`Executing lead module`);
     await page.locator(`//a[text()="Create Lead"]`).click();
     await page.waitForTimeout(3000)     
})

test(`Account Creation`,async ({page}) => {
      console.log(`Executing Account module`);
      page.locator(`//a[text()="Create Account"]`).click(); 
      await page.waitForTimeout(3000) 
    }
)

test.afterEach(`Fetch the test status of each test`,async ({},testinfo) => {
    console.log(`Executing after each test`);
    console.log(testinfo.status);
    console.log(testinfo.title);   
    
})

test.afterAll(`Read data from CSV `,async () => {
    console.log(`Executed aftet completion of all the tests`);
    console.log(`The report and screenshot are uploaded in the test management tool`);5
})

})