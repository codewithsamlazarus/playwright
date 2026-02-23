
function add(num1, num2, callback){
    let sum = num1 + num2;
    // console.log(`Hi I'm function add(), I ran 1st and my result is ${num1} + ${num2}`);
    // console.log(sum);
    return callback(sum);
}

function subtract(num){
    let result = num - 5;
    // console.log(`Hi I'm function subtract(), I ran 2nd and my result is`);
    // console.log(result);
    return result;
}

add(10,10,subtract);
