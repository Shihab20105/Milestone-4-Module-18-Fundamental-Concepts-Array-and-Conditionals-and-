/*                                                  Practice Problem 1


You are given an array:
var fruits = ['Apple', 'Banana', 'Orange'];
(a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
(b) Remove 'Orange' and add 'Watermelon'. */


var fruits = ['Apple', 'Banana', 'Orange'];
index = fruits.indexOf('Banana');
console.log(index);
/* Output: 
1 */

if(index !== -1){
    fruits[index] = 'Mango';
    console.log(fruits);
}
var fruits = ['Apple', 'Banana', 'Orange'];
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

/* Output:
[ 'Apple', 'Mango', 'Orange' ]
[ 'Apple', 'Banana' ]
[ 'Apple', 'Banana', 'Watermelon' ] */


var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
/* Output:
[ 'Apple', 'Mango', 'Orange' ]
[ 'Apple', 'Mango' ]
[ 'Apple', 'Mango', 'Watermelon' ] */