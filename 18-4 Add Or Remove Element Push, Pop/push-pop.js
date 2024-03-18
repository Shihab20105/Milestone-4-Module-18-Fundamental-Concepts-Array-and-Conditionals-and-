var numbers = [78, 45, 98, 45];

// Use push to add an element to an array as the last element of the array.
numbers.push(63);
// console.log(numbers);

var friends = ['Balam', 'Kalam', 'Salam'];
friends.push('Halim');
friends.push('Hasan');
// console.log(friends);

// Use pop to get rid of the last element.
console.log(numbers);
numbers.pop();
// numbers.pop();
var element = numbers.pop();
console.log(numbers);
console.log(element);

// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
fruits.unshift("Lemon","Pineapple");
// console.log(fruits);

// Shift (remove) the first element of the array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);


