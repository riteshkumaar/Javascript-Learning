/*

Activity 1: Variable Declaration
Task 1: Declare a variable using var, assign it a number, and log the value to the console. Task 2: Declare a variable using `let, assign it a string, and log the value to the console.

Activity 2: Constant Declaration
Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

Activity 3: Data Types
Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using the tyreof operator.

Activity 4: Reassigning variables
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

Activity 5: Understanding cont
Task 6: Try reassigning a variable declared with const and observe the error.

Feature Request:
Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
Reasignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

*/

console.log("Task 01");
var a = 90
console.log(a);
console.log();

console.log("Task 02");
const existsThere = false
console.log(existsThere);
console.log();

console.log("Task 03");
let existsHere = false
let str = "Hello"
let obj = {
    name : "Ritesh",
    birthplace : "Deoghar",
    age : 21,
};
let newArray = [typeof existsHere, typeof obj, typeof str, typeof a]
console.table(newArray)
console.log();

console.log("Task 04");
let prevAns = 99
console.log(prevAns);
prevAns = 100
console.log(prevAns);
console.log();

console.log("Task 05");
const fix = true
fix = false // this has been intentionally done to showcase the error
console.log();
