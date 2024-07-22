// Understanding Data Types in JavaScript
let name = "Skylar"
let age = 31
let grade = "25th"
let isAttendence = true

console.log(`${name} is ${age} years old and if grades woud have continued he would be in the ${grade} grade. His current status is ${isAttendence ? "in attendence." : "not in attendence."}`)

//  Exploring JavaScript Operators
let num1 = 64
let num2 = 38

let sum = num1 + num2
let difference = num1 - num2
let product = num1 * num2
let quotient = num1 / num2

// Task 3: Perform arithmetic operations
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);


// Task 4: Explore assignment operators
num1 *= 10
num2 += 62

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);


// Task 5: Use comparison operators
comp1 = num1 == num2
comp2 = num1 >= num2
comp3 = num1 != num2

console.log("Is num1 equal to num2?", comp1 ? "Equal" : "Not Equal");
console.log("Is num1 greater than num2?", comp2 ? "Yes" : "No");
console.log("Is num1 not equal to num2?", comp3 ? "Yes, it is not equal to." : "No, it is equal to.");


// Task 6: Apply logical operators

let isPositive = num1 && num2 > 0;
let isEven = (num1 % 2 === 0) || (num2 % 2 === 0);

console.log("Are both numbers positive?", isPositive ? "They sure are!" : "At least one of them isnt.");
console.log("Is at least one number even?", isEven ? "At least 1 of them is!" : "Nope.");


