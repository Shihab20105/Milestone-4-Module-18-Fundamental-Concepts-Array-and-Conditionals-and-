/*                          Index */

/* Array Structure:
Array: ( [45, 68, 78, 56, 89, 98]; )
Index:     0    1   2   3   4   5 
Elements: 45, 68, 78, 56, 89, 98
Array Length: 6
First Index: 0
Last Index: 5
*/

/* 1. Get element value by index: */
var numbers = [45, 68, 78, 56, 89, 98];
console.log(numbers);
/* Output:
[ 45, 68, 78, 56, 89, 98 ] */
console.log(numbers[0]);
/* Output:
45 */
console.log(numbers[3]);
/* Output:
56 */
console.log(numbers[2]);
/* Output:
78 */

var elements = numbers[1];
console.log(elements);
/* Output:
68 */

/* 2. Set element value by index: */
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);
/* Output:
[ 45, 77, 78, 44, 89, 98 ] */

/* 3. Find index of an element: */
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
/* Output:
4 */
var positionIndex = numbers.indexOf(188);
console.log(positionIndex);
/* Output:
-1 */
