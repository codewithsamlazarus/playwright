import baseClass from "./BaseClass";

class LoginPage extends baseClass {

    // @override
    perfomCommonTasks(): void {
        console.log(`Performing common tasks like waiting for element, handling exceptions, etc. in Login Page`);
    }

}

let loginPageObj = new LoginPage();
// loginPageObj.findElement("#username");
// loginPageObj.clickElement("#loginButton");
// loginPageObj.enterText("#password", "Test@123");
loginPageObj.perfomCommonTasks();