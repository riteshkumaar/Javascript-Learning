/*

Activity 1: For Loop
Task 1
Write a program to print numbers from 1 to 10 using a for loop.
Task 2
Write a program to print the multiplication table of 5 using a for loop.
Activity 2: While Loop
Task 3
Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
Task 4
Write a program to print numbers from 10 to 1 using a while loop.
Activity 3: Do While Loop
Task 5
Write a program to print numbers from 1 to 5 using a do...while loop.
Task 6
Write a program to calculate the factorial of a number using a do...while loop.
Activity 4: Nested Loops
Task 7
Write a program to print a pattern using nested for loops:
    *
    *  *
    *  *  *
    *  *  *  *
    *  *  *  *  *
Activity 5: Loop Control Statements
Task 8
Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
Task 9
Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
Feature Requests
Number Printing Script
Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
Multiplication Table Script
Create a script that prints the multiplication table of 5 using a for loop.
Pattern Printing Script
Write a script that prints a pattern of stars using nested loops.
Sum Calculation Script
Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
Factorial Calculation Script
Create a script that calculates the factorial of a number using a do...while loop.

*/
console.log("Print numbers from 1 to 10");
for(let a = 1;a<=10;a++)
{
    console.log(a);
}

let num = 22
for(let a = 1;a<=10;a++)
{
    console.log(`${num} * ${a} == ${num*a}`);
}

let sum = 0;
let i = 10;
while(i>0)
{
    console.log(i);
    sum = sum + i;
    i--;
}
console.log("Sum of first 10 numbers is "+sum);

let fact = 1;
i = 1;
do{
    fact = fact * i;
    i++;
}while(i<=10)
console.log("Factorial of first 10 numbers is "+fact);

console.log();
console.log("Pattern Printing");
for(let a = 1;a<=5;a++)
{
    for(let b=1;b<=a;b++)
    {
        process.stdout.write("* ")
    }
    console.log();
}

// Note : process.stdout.write can access only var variables and works with strings only
for(var a =1;a<=10;a++)
{
    if(a==7)
        continue;
    else
    process.stdout.write(a+" ");
}
console.log();
for(var a =1;a<=10;a++)
    {
        if(a==7)
            break;
        process.stdout.write(a+" ")
    }







