/*                          Conditional */

var iphonePrice = 79000;
// var myBudget = 9500;
var myBudget = 95000;

// If iphone price is less than my budget, then i will buy the iphone.
/**
 * If iphone price is less than my budget
 *   Then i will buy the iphone
 * 
 * if (condition) {
 *   // Will execute if the condition is true
 * } 
 *  
 * */ 

if (iphonePrice < myBudget) {
    console.log('then i will buy the phone');
}
/* Output: 
then i will buy the phone */


var chickenPrice = 500;
var myMoney = 50;
// if (chickenPrice <= myMoney) {
//     console.log('then i will buy the chicken');
// }
// if (chickenPrice > myMoney) {
//     console.log('then i will have smashed potato and lentils');
// }

/**
 * if chicken's price less than my budget 
 * the i will buy chicken
 * na hoi / else 
 * */

if (chickenPrice < myMoney) {
    console.log('then i will have chicken');
}
else {
    console.log('i will have potato');
}
/* Output:
i will have potato */