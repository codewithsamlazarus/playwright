
const person = {name : "John"};
const alias = person;
alias.name = "Alice";
const result = person.name;

console.log(alias.name);
console.log(result);

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

Direction.Down