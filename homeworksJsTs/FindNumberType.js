const { log } = require("console");

function findNumberType(inputNumber){
    let result;
    switch(inputNumber > 0 ? 'Positive' : inputNumber < 0 ? 'Negative' : 'Zero'){
        case 'Positive':
            result = inputNumber + " is a Positive number";
            console.log(result);
            break;
        case 'Negative':
            result = inputNumber + " is a Negative number";
            console.log(result);
            break;
        case 'Zero':
            result = inputNumber + " is 0";
            console.log(result);
            break;
    }
        
}

findNumberType(-5);