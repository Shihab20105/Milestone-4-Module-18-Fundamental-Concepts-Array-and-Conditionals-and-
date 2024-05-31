/*                          Nested Conditions */


var math = true;
var geometry = true;
var straightLine = false; 

if (math == true) {
    console.log('You are proficient in math.');
} else {
    if (geometry == true) {
        if (straightLine == true) {
            console.log('You have mastered straight lines in geometry.');
        } else {
            console.log('You need to maintain a straight line in geometry.');
        }
    } else {
        console.log('You cannot be a Pythagoras without geometry skills.');
    }
}
/* Output:
You are proficient in math. */



