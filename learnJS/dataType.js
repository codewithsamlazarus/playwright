/*
const { log } = require("node:console");


var phoneNumber = 1234567890;

console.log(phoneNumber); // Output: number
console.log(typeof phoneNumber); 


if (true) {
    var x = 10;
}
console.log(x);

if (true) {
    let x = 10;
}
console.log(x);

function test() {
    var x = 10;
}
console.log(x);

function test_new() {
    let x = 10;
}
console.log(x);


let companyName = 'Deloitte';
let firmName = 'Deloitte';
console.log(companyName === firmName);
console.log(typeof companyName);



let newCompanyName = new String('Deloitte');
let newFirmName = new String('Deloitte');
console.log(newCompanyName === newFirmName);
console.log(typeof newCompanyName); 
*/

function numberOfTestcases(testcases) {
    console.log(`We've ${testcases} testcases`);
}

let input = process.argv[2];
numberOfTestcases(input);