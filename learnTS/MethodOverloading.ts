

class PlaywrightMethods {

    public click(element: string, force ?: boolean): void {
        if (force) {
            console.log(`Forcefully clicked on element with selector: ${element} Force = ${force}`);
        } else {
            console.log(`Clicked on element with selector: ${element}`);
        }
    }

}

new PlaywrightMethods().click("Login Button", true) 