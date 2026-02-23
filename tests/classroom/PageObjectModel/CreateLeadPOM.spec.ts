
import { customTestFixture } from "../../../utility/customFixture";
import LeafTapsLoginCreds from "../../../data/leafTapsLoginTestData.json";
import dotenv from "dotenv"

dotenv.config({ path: "data/leaftaps.env" })

customTestFixture(`Create Lead page functionality`, async ({ page, loginPageFixture, welcomePageFixture, homePageFixture, leadPageFixture, createLeadPageFixture, viewLeadPageFixture }) => {

    (await (await loginPageFixture.loadurl(process.env.BaseURL as string))
    .enterCrdentials(LeafTapsLoginCreds[1].username, LeafTapsLoginCreds[1].password)).clickLogin();

    await welcomePageFixture.clickCRM();
    await homePageFixture.clickLead();
    await leadPageFixture.clickCreateLead();
    await createLeadPageFixture.enterMandatoryDetails();
    await createLeadPageFixture.clickSubmit();
    await viewLeadPageFixture.verifyFirstName();

    /*
    // new LoginPage(page).loadurl().enterCrdentials().clickLogin();

    const login = loginPageFixture // Created an object to call all the methods / actionables
    await login.loadurl();
    await login.enterCrdentials();
    await login.clickLogin();

    const wp = welcomePageFixture;
    await wp.clickCRM();

    const hp = homePageFixture;
    await hp.clickLead();

    const lp = leadPageFixture;
    await lp.clickCreateLead();

    const clp = createLeadPageFixture;
    await clp.enterMandatoryDetails()
    await clp.clickSubmit();

    const vp = viewLeadPageFixture;
    await vp.verifyFirstName()
*/
})