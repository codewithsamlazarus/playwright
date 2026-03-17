

class WebComponent {

    constructor(public selector: string) {
        this.selector = selector;
    }

    click() : void {
        console.log(`Clicking on element with selector: ${this.selector}`);
    }

    focus() : void {
        console.log(`Focusing on element with selector: ${this.selector}`);
    }

}

export default WebComponent;

let wcObj = new WebComponent("#username");
wcObj.click();
wcObj.focus();