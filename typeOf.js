// TYPEOF CONVERSION: Used to determine the data type of a variable or value 
// The typeof operator returns a string indicating the type of the operand 

// String 
let name1 = "John";
console.log(typeof name1); 

// NOTE: we need to be mindful of loose equality (==) versus strict equality (===) when comparing data types.
// Loose equality (==) performs type coercion, while strict equality (===) does not 
// Type coercion is the process of converting value from one data type to another 

console.log(typeof 42); // Number
console.log(typeof "Hello, world!"); // String 
console.log(typeof true); // Boolean

person1 = {
  name: "John",
  age: 30
}; 

console.log(typeof {name: "John", age:30} ); // Object 
console.log(typeof [1, 2, 3]); 
console.log(typeof undefined); 
console.log(typeof null); 
// console.log(typeof ); 
