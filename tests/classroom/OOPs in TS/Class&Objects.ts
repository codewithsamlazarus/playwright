class PlaywrightMethod {

    nameOfTheBrowser:string;

    constructor(browserName:string){
        this.nameOfTheBrowser = browserName
        console.log(`Hi, I'm ${this.nameOfTheBrowser}`);       
    }

    headLess(){
        const isHeadless = true;
        console.log(`I'm running headless`);
    }

    loadURL(){
        console.log(`and your app is launched successfully in ${this.nameOfTheBrowser}`);
    }

}

let obj = new PlaywrightMethod(`Edge`);
obj.headLess();
obj.loadURL();