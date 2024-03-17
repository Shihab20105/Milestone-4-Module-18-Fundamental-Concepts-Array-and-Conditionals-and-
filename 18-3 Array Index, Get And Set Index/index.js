var numbers = [45, 68, 78, 56, 89, 98];

// Index ( [45, 68, 78, 56, 89, 98]; )
//          0    1   2   3   4   5

// 1. Get element value by index
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[3]);
// console.log(numbers[2]);

var elements = numbers[1];
// console.log(elements);

// 2. Set element value by index
numbers[1] = 77;
numbers[3] = 44;
// console.log(numbers);

// 3. Find index of an element
// var positionIndex = numbers.indexOf(89);
// var positionIndex = numbers.indexOf(188);
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);
