import { join } from "node:path";

// Step 1: Funtion named intersection that takes in two arrays as parameters
function intersection(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    // Step 3: Iterating through both arrays to find common elements
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            }
        }
    }
    return result;
}

// Few elements as common
console.log(intersection([1,3,5,6,7,9,11],[2,4,5,6,7,8,10,12]));

// No common elements
// console.log(intersection([1,3,5,7,9],[2,4,6,8,10]));

// All elements are common
// console.log(intersection([1,2,3,4,5],[1,2,3,4,5]));

