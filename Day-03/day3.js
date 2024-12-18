/*
Activity 1: If-Else Statements
Task 1
Write a program to check if a number is positive, negative, or zero, and log the result to the console.
Task 2
Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
Activity 2: Nested If-Else Statements
Task 3
Write a program to find the largest of three numbers using nested if-else statements.
Activity 3: Switch Case
Task 4
Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5
Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
Activity 4: Conditional (Ternary) Operator
Task 6
Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
Activity 5: Combining Conditions
Task 7
Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
Feature Requests
Number Check Script
Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
Voting Eligibility Script
Create a script to check if a person is eligible to vote based on their age and log the result.
Day of the Week Script
Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
Grade Assignment Script
Create a script that uses a switch case to assign a grade based on a score and logs the grade.
Leap Year Check Script
Write a script that checks if a year is a leap year using multiple conditions and logs the result.

*/

console.log("Check if a number is positive, negative, or zero");
let a = -5
if(a>0)
    console.log("Positive");
else if(a<0)
    console.log("Negative");
else
    console.log("Zero");
console.log();

let age = 23;
(age>=18)? console.log("Eligible to vote") : console.log("Not eligible to vote");

let n1 = 7;
let n2 = 18;
let n3 = 0;
if(n1 > n2 )
{
    if(n1 > n3)
        console.log(n1+" is the largest.");
    else
    console.log(n3+" is the largest.");     
}
else
{
    if(n2 > n3)
        console.log(n2+" is the largest.");
    else
    console.log(n3+" is the largest."); 
}
console.log();
let ch = 6;
switch(ch)
{
        case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
        default:
        console.log("Wrong input");
}
console.log();
let num = 23;
(num %2 == 0)? console.log("Even") : console.log("Odd");

// A leap year is the one which is divisible by 4 but not 100 or is only divisble by 400
function checkLeap(year)
{
    if((year % 4 == 0 && year %100 != 0 ) || year% 400 == 0) 
        return 'This is a leap year'
    else
    return 'Not A Leap Year';
}

console.log(checkLeap(1600));
console.log(checkLeap(2100));
console.log(checkLeap(2400));
console.log(checkLeap(1900));
