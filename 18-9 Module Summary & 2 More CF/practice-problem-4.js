/*                      Practice Problem 4
You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
Isosceles => two sides are equal */


var firstSideOfTriangle = 9;
var secondSideOfTriangle = 8;
var thirdSideOfTriangle = 9;
if ((firstSideOfTriangle == secondSideOfTriangle) || (firstSideOfTriangle == thirdSideOfTriangle) || (secondSideOfTriangle == thirdSideOfTriangle)) {
    console.log('The Triangle is Isosceles');
}
else { 
    console.log('The Triangle is not Isosceles');
}
/* Output: 
The Triangle is Isosceles */