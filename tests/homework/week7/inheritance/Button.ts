import WebComponent from "./WebComponent"

class Button extends WebComponent {

    // override
    click() : void {
        console.log(`Clicking on button element with selector: ${this.selector}`);
    }

}

export default Button;

let btnObj = new Button("#submit");
btnObj.click();