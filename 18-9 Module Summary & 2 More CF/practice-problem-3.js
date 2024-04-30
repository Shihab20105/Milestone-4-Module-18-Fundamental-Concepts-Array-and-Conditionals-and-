/* Practice Problem 3

You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

Using Multi-stage 'if-else' Conditional: else...else if...else */

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3){
    console.log('The largest number is num1');
}
else if (num2 > num3){
    console.log('The largest number is num2');
}
else {
    console.log('The largest number is num3');
}
/* Output: 
The largest number is num2 */


if (num1 > num2 && num1 > num3){
    console.log('The largest number is:', num1);
}
else if (num2 > num3){
    console.log('The largest number is:', num2);
}
else {
    console.log('The largest number is:', num3);
}
/* Output: 
The largest number is: 79 */


/* Using Nested 'if-else' Conditional */
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2){
    if (num1 > num3){
        console.log(num1,'num1: largest');
    }
    else {
        console.log(num3, 'num3: largest');
    }
}
else if (num2 > num3){
    console.log(num2, 'num2: largest');
}
else {
    console.log(num3, 'num3: largest');
}
/* Output: 
79 num2: largest */


/* Here's a breakdown of how it works:

Three variables num1, num2, and num3 are initialized with values 13, 79, and 45 respectively.

The first 'if' statement checks if num1 is greater than num2. If it is, it enters into another nested 'if' statement to check if num1 is also greater than num3. If it is, it prints num1 as the largest number. If not, it prints num3 as the largest number.

If num1 is not greater than num2, it goes to the 'else if' condition, which checks if num2 is greater than num3. If it is, it prints num2 as the largest number.

If neither of the above conditions is true, it means num3 is the largest number, so it goes to the 'else' block and prints num3 as the largest number.

Let's analyze the scenario:

If num1 is the largest number, it will print num1: largest.
If num2 is the largest number and num1 is not, it will print num2: largest.
If neither num1 nor num2 is the largest, it implies that num3 is the largest, and it will print num3: largest.
In this specific case, num2 (79) is the largest number, so the output would be: */