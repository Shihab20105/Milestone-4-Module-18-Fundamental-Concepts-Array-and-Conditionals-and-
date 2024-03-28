//* Practice Problem 1 *//
// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// (a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
// (b) Remove 'Orange' and add 'Watermelon'.

// var fruits = ['Apple', 'Banana', 'Orange'];
// index = fruits.indexOf('Banana');
// console.log(index);
// Output: 1
// if(index !== -1){
    // fruits[index] = 'Mango';
    // console.log(fruits);
// }
// Output: [ 'Apple', 'Mango', 'Orange' ]

var fruits = ['Apple', 'Banana', 'Orange'];
fruits.pop();
fruits.push('Watermelon');
// console.log(fruits);
// Output:[ 'Apple', 'Banana' ]
console.log(fruits);
// Output:[ 'Apple', 'Banana', 'Watermelon' ]