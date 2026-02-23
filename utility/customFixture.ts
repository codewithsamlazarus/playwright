import { LoginPage } from "../pages/01-loginPage";
import { WelcomePage } from "../pages/02-welcomePage";
import { HomePage } from "../pages/03-homePage";
import { LeadPage } from "../pages/04-leadPage";
import { CreateLeadPage } from "../pages/05-createLeadPage";
import { ViewLeadPage } from "../pages/06-viewLeadPage";
import { AccountPage } from "../pages/05-accountPage";
import { CreateAccountPage } from "../pages/07-createAccountPage";
import { ViewAccountPage } from "../pages/08-viewAccountPage";

import { test as bT } from "@playwright/test"

type myFixture = {
    loginPageFixture: LoginPage,
    welcomePageFixture: WelcomePage,
    homePageFixture:HomePage,
    leadPageFixture:LeadPage,
    createLeadPageFixture:CreateLeadPage,
    viewLeadPageFixture:ViewLeadPage,
    accountPageFixture:AccountPage,
    createAccountPageFixture:CreateAccountPage,
    viewAccountPageFixture:ViewAccountPage
}
//bT===test ( bT is another name for test runner)
export const customTestFixture = bT.extend<myFixture>({

    loginPageFixture: async ({ page }, use) => {
        const login = new LoginPage(page);
        await use(login)
    },
    welcomePageFixture: async ({ page }, use) => {
        const wp = new WelcomePage(page);
        await use(wp)
    },
     homePageFixture: async ({ page }, use) => {
        const hp = new HomePage(page);
        await use(hp)
    },
    leadPageFixture: async ({ page }, use) => {
        const lp = new LeadPage(page);
        await use(lp)
    },
    createLeadPageFixture: async ({ page }, use) => {
        const clp = new CreateLeadPage(page);
        await use(clp)
    },
    viewLeadPageFixture: async ({ page }, use) => {
        const vp = new ViewLeadPage(page);
        await use(vp)
    },
    accountPageFixture: async ({ page }, use) => {
        const ap = new AccountPage(page);
        await use(ap)
    },
    createAccountPageFixture: async ({ page }, use) => {
        const cap = new CreateAccountPage(page);
        await use(cap)
    },
    viewAccountPageFixture: async ({ page }, use) => {
        const vap = new ViewAccountPage(page);
        await use(vap)
    }
})