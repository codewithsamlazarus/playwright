import { customTestFixture } from "../../../utility/customFixture";
import LeafTapsLoginCreds from "../../../data/leafTapsLoginTestData.json";
import dotenv from "dotenv"

dotenv.config({ path: "data/leaftaps.env" })

customTestFixture(`Create Account page functionality`, async ({ page, loginPageFixture, welcomePageFixture, homePageFixture, accountPageFixture, createAccountPageFixture, viewAccountPageFixture }) => {

   (await (await loginPageFixture.loadurl(process.env.BaseURL as string))
       .enterCrdentials(LeafTapsLoginCreds[1].username, LeafTapsLoginCreds[1].password)).clickLogin();
   
       await welcomePageFixture.clickCRM();
       await homePageFixture.clickAccounts();
       await accountPageFixture.clickCreateAccount();
       await createAccountPageFixture.enterMandatoryDetails();
       await createAccountPageFixture.clickSubmit();
       await viewAccountPageFixture.verifyAccountName();

})