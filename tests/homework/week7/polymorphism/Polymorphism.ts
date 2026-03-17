

class Polymorphism {

    // @overload
    reportStep(msg : string, status : string, snap? : boolean) : void {
        if (snap === undefined) {
            console.log(`Reporting step: ${msg}, Status: ${status}`);
        } else {
            console.log(`Reporting step: ${msg}, Status: ${status}, Screenshot taken: ${snap}`);
        }
    }

}

let poly = new Polymorphism();

poly.reportStep("Login successful", "PASS");
poly.reportStep("Login successful with screenshot", "PASS", true);