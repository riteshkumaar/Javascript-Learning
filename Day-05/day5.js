/*

Activity 1: Function Declaration
Task 1
Write a function to check if a number is even or odd and log the result to the console.

Task 2
Write a function to calculate the square of a number and return the result.

Activity 2: Function Expression
Task 3
Write a function expression to find the maximum of two numbers and log the result to the console.

Task 4
Write a function expression to concatenate two strings and return the result.

Activity 3: Arrow Functions
Task 5
Write an arrow function to calculate the sum of two numbers and return the result.

Task 6
Write an arrow function to check if a string contains a specific character and return a boolean value.

Activity 4: Function Parameters and Default Values
Task 7
Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

Task 8
Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

Activity 5: Higher-Order Functions
Task 9
Write a higher-order function that takes a function and a number, and calls the function that many times.

Task 10
Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

Feature Requests
Even or Odd Function Script
Write a script that includes a function to check if a number is even or odd and logs the result.
Square Calculation Function Script
Create a script that includes a function to calculate the square of a number and returns the result.
Concatenation Function Script
Write a script that includes a function expression to concatenate two strings and returns the result.
Sum Calculation Arrow Function Script
Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
Higher-Order Function Script
Write a script that includes a higher-order function to apply a given function multiple times.

*/

function OddorEven(num)
{
    return (num%2==0)
}
console.log(OddorEven(25));
console.log();
function squa(num)
{
    return (num*num)
}
console.log(squa(23));
console.log();

function maxofTwo(a, b)
{
    if(a>b)
        return a
    else
        return b
}
console.log(maxofTwo(5,7)+" is the greater.");
console.log();
let st1 = "Hello "
let st2 = "Ritesh !!"
function concat(st1, st2) {
    return st1 + st2;
}
console.log(concat(st1,st2));
console.log();

let a = 10
let b = 25
const ans = (a, b) => a+b 
console.log(ans(a, b)); // ans works as a function name and the argments while calling are written 
// in the same way as they are written normally
// the only difference is the fact that the function syntax has gretaly shortened

const containsChar = (s, ch) => s.includes(ch)
// .includes is used to check if the given string contains a given charcter
console.log(containsChar("Ritesh",'e'));

let ansWer = (a, b=5) => a * b;
console.log(ansWer(5)); // since we have given a default parameter, there's no need to
// give a value to b while calling it

const Greet = (name,age = 22) => `Hi ${name}, hope you are doing well on your ${age}nd birthday.`
console.log(Greet("Ritesh"));

function highOrder(print1, n)
{
    for(i=1;i<=n;i++)
    {
        print1();
    }
}
function print1()
{
    process.stdout.write(1+" ")
}
highOrder(print1, 5)

/*
Write a higher-order function that takes two functions and a value,
 applies the first function to the value, and then applies the 
 second function to the result. */


 console.log();
 
 function newFun(f1, f2, c)
 {
    let a1 = f1(c)
    return f2(a1)
 }
 function f1(a) {
    return a * a
 }
 function f2(a)
 {
    return Math.pow(a,0.5)
 }
 console.log(newFun(f1, f2, 2));
 








