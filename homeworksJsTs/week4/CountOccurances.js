
// Count the number of occurrences of each character in a string

const numbers = [2,4,5,4,2,1,2,2,2,2,2,2,2,2,2,2];

function countCharOccurance(input) {
// Step 1: Initialize count = 0
let count = 0;
// Step 2: Loop through the array `nums`.
    for (let index = 0; index < numbers.length; index++) {
        // Step 3: If nums[index] == input, increment count
        if (numbers[index] === input) {
            count++;
        }
    }
    // Step 4: Return count
    return count;
}

console.log(countCharOccurance(2)); 
