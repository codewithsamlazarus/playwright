import WebComponent from "./WebComponent";


class TextInput extends WebComponent{
    value : string = ``;

    enterText(text : string) : void {
        this.value = text;
        console.log(`Entering text: ${this.value} into text input element`);
    }

}

export default TextInput;

let textInputObj = new TextInput("#course");
textInputObj.enterText("Playwright");