//  Arrays are used to store multiple values in a single variable.

let alphabets = ['a', 'b', 'c', 'd'];

// Push - adds elements at the end of an array
alphabets.push('e', 'f', 'g', 'h');

alphabets.sort(); // sorts the array in place

// Pop - removes elements at the end of an array
alphabets.pop();

// Shift - removes elements at the beginning of an array
alphabets.shift();

// Unshift - adds elements at the beginning of an array
alphabets.unshift('z', 'y', 'x');

// Slice - extracts a section of an array and returns a new array
let alphabetsNew = alphabets.slice(0,3);

console.log(alphabets);
console.log(alphabetsNew);
console.log(alphabets.slice(-5, -2)); // negative indices
console.log(alphabets.concat(alphabetsNew)); // concatenation of arrays

let spreadArray = [...alphabets];
console.log(spreadArray);
