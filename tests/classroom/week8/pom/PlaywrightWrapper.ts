
import { Page } from "@playwright/test"


export abstract class PWWrapper{

    lppage : Page // lppage ==> globally declared as well as assigned with "page" reference through Lpage local variable  used under constructor method and at

    //First step inside a class should be assigning the refrence to the page variable

    constructor(Lpage:Page){ // constructor method is invoked first
        this.lppage=Lpage // Lpage is a local varible to capture the page reference passed as an argument through the parameterized constructor 
        //Lpage === page (through argument passing)// lppage(global variable) == Lpage asssigned with the value of local variable
        //page(constructor argument) --> Lpage(local) --> lppage(global)
    }

    async clearAndFill(selector:string, data:string){

       await this.lppage.locator(selector).clear() // "#username"
       await this.lppage.locator(selector).fill(data)
       
    }

    abstract takeSnap() : Promise<void>;

    async startApp(url : string){
        await this.lppage.goto(url)
    }


}