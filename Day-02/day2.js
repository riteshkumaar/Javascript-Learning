/*

Activity 1: Arithmetic Operations
Task 1: Write a program to add two numbers and log the result to the console.

Task 2: Write a program to subtract two numbers and log the result to the console.

Task 3: Write a program to multiply two numbers and log the result to the console.

Task 4: Write a program to divide two numbers and log the result to the console.

Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

Activity 2: Assignment Operators
Task 6: Use the + operator to add a number to a variable and log the result to the console.

Task 7: Use the operator to subtract a number from a variable and log the result to the console.

Activity 3: Comparison Operators
Task 8: Write a program to compare two numbers using > and < and log the result to the console.

Task 9: Write a program to compare two numbers using > and <= and log the result to the console.

Task 10: Write a program to compare two numbers using == and === and log the result to the console.

Activity 4: Logical Operators
Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

Task 13: Write a program that uses the operator to negate a condition and log the result to the console.

Activity 5: Ternary Operator
Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
Feature Requests
Arithmetic Operations Script : Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

Comparison and Logical Operators Script : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

Ternary Operator Script : Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

*/

console.log("Arithematic Operations and Assignment Operators");
let a = 5
let b = 10
let arrayOperations = [a+b, a-b,a*b, a%b, a/b];
console.table(arrayOperations);
console.log();

console.log("Comparison Operators");
console.log(a>b);
console.log(a<b);
console.log(0<=0);
console.log(5 == 5);
console.log(5 === 10);
console.log("1" == 1); // == doesn't compare the data type hence returns true here 
console.log("1" === 1); // === compares the data types as well hence returns false

console.log("Logical Operators");
let ans = "correct"
let marks = 100
if(ans == 'correct' && marks == 100)
    console.log("Complete answer");
    ans = 'incorrect'
    marks = 80
if(ans!='correct' || marks<100)
    console.log("There's scope of improvement");
    console.log(!marks);

console.log("Ternary Operator");
let answer = (50 > 100)? "50, 100 se bada kaise hoga bhai":"sahi uttar"
console.log(answer);
