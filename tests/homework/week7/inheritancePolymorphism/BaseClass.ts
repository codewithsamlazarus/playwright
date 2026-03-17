

class BaseClass {

    findElement(locator: string): void {
        console.log(`Finding element with locator: ${locator}`);
    }

    clickElement(locator: string): void {
        console.log(`Clicking on element with locator: ${locator}`);
    }

    enterText(locator: string, text: string): void {
        console.log(`Entering text: ${text} into element with locator: ${locator}`);
    }

    perfomCommonTasks(): void {
        console.log(`Performing common tasks like waiting for element, handling exceptions, etc.`);
    }
}

export default BaseClass;
/*
let baseClassObj = new BaseClass();
baseClassObj.findElement("#username");
baseClassObj.clickElement("#loginButton");
baseClassObj.enterText("#password", "Test@123");
baseClassObj.perfomCommonTasks();
*/