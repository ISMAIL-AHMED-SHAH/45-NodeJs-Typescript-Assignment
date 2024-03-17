"use strict";
//equality test with strings
let apple = "apple;";
console.log("is apple equal to apple?");
console.log(apple == "apple");
console.log("\nis apple not equal to apple?");
console.log(apple != "apple");
//test using lowercase function
let uppercaseApple = "APPLE";
console.log("\n is APPLE equal to apple?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n is APPLE not equal to apple?");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests
let ten = 10;
let five = 5;
console.log("\nis ten equal to five?");
console.log(ten == five);
console.log('\n is ten not equal to five?');
console.log(ten != five);
console.log('\nis ten greater than five?');
console.log(ten > five);
console.log('\n is ten less than five?');
console.log(ten < 5);
console.log('\n is ten less than five?');
console.log(ten < 5);
console.log('\n is ten greater or equal to five?');
console.log(ten >= 5);
console.log('\n is ten less or equal to five?');
console.log(ten <= five);
//using & and || operator
console.log('\nten is not eual to 5 and ten is greater than 5');
console.log(ten != 5 && ten > 5);
console.log('\nten is eual to 5 and five is greater than 20');
console.log(ten == 5 && five > 20);
console.log('\n10 is greater than 50 OR 20 is equal to 20');
console.log(10 > 50 || 20 == 20);
console.log('\n10 is greater than 50 OR 20 is not equal to 20');
console.log(10 > 50 || 20 != 20);
//test whether an item is in array
let fruits = ['apple', 'banana', 'orange'];
console.log('is orange included in my array?');
console.log(fruits.includes('orange'));
console.log('\n is orange not include in array?');
console.log(!fruits.includes('orange'));
