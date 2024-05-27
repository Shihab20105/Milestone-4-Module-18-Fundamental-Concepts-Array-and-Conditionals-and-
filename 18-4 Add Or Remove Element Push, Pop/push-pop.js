/*                          Add Or Remove Element */


/* Use push to add an element to an array as the last element of the array. */
var numbers = [78, 45, 98, 45];
numbers.push(63);
console.log(numbers);
/* Output:
[ 78, 45, 98, 45, 63 ] */


/* Use pop to get rid of the last element. */
numbers.pop();
numbers.pop();
console.log(numbers);
/* Output: 
[ 78, 45, 98 ] */


var element = numbers.pop();
console.log(numbers);
/* Output: 
[ 78, 45 ] */
console.log(element);
/* Output: 98 */

var friends = ['Balam', 'Kalam', 'Salam'];
friends.push('Halim');
friends.push('Hasan');
console.log(friends);
/* Output: 
[ 'Balam', 'Kalam', 'Salam', 'Halim', 'Hasan' ] */

/* The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array. */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
/* Output: 
[ 'Banana', 'Orange', 'Apple', 'Mango' ] */
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
/* Output: 
[ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ] */

/* Shift (remove) the first element of the array: */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
/* Output: 
[ 'Orange', 'Apple', 'Mango' ] */


