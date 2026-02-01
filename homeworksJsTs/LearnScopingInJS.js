const { log } = require("console");


let genderType = "male";
function printGender(){
    let color = "brown";
    if (genderType.startsWith("1")) {
        var age = 30;
        let color = "pink";
        console.log(color);
    }
    console.log(age)
}

printGender()
console.log(genderType)