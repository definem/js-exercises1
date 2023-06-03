//EXERCISES ARE NOT OPTIMAL 

// // <---- Exercise-2 and 3---->

// // Program for checking even and odd numbers;

// // 1-method

// var a = 2;

// if (a % 2 == 0) {
//     console.log('A is an even number');
// }else if (a % 2 == 1) {
//     console.log('A is not an even number');
// }else{
//     console.log('Not off topic');
// }

// // 2-method

// var num = +prompt('Enter a number');

// if (num % 2 == 0) {
//     console.log("A is an even number");
// }else if (num % 2 == 1) {
//     console.log('A is not an even number');
// }else{
//     console.log('Not off topic');
// }

// // <---- Exercise-4---->

// // Program that takes an integer and checks it
// // with the formula (num1 > 0 && num2 > 0);

// // 1-method

// var num1 = 2;
// var num2 = 4;

// if (num1 > 0 && num2 > 0) {
//   console.log("Successfully checked");
// } else {
//   console.log("Failed to check");
// }

// // 2-method

// var num1 = +prompt("Enter a first number");
// var num2 = +prompt("Enter a second number");

// if (num1 > 0 && num2 > 0) {
//   console.log("Successfully checked");
// } else {
//   console.log("Failed to check");
// }

// <---- Exercise-5---->

// a program that takes 3 numbers
// from the user and finds the highest value;

// 1-method

/*
var num1 = 2;
var num2 = 41;
var num3 = 65;
chala
*/

// // 3-method

// // working with math library functions

// console.log(Math.max(1, 3, 2));

// // 4-method

// const array = [-1, 2, -5, 8, 16];

// let max = array[0],
//   min = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }

// console.log("max = " + max);

// <---- Exercise-6 skipped---->

// <---- Exercise-7---->

// // 1-method

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let odd = nums[0];
// for (let i = 0; (i = nums.length); i++) {
//   if (nums[i] % 2 === 0) {
//     odd = nums[i];
//     console.log("It is an odd number");
//   }
// }

// // 2-method

// let num1 = +prompt("Son 1");
// let num2 = +prompt("Son 1");
// let num3 = +prompt("Son 1");

// let arr = [num1, num2, num3];

// console.log(arr); // [2,4,1]

// <---- Exercise 8 and 9 skipped---->

// // <---- Exercise-10---->

// // method-1

// var weekdays = +prompt("Enter wekday's number with alphabetic characters");

// var one = "Monday";
// var two = "Tuesday";
// var three = "Wednesday";
// var four = "Thursday";
// var five = "Friday";
// var six = "Saturday";
// var seven = "Sunday";

// if (weekdays == one) {
//   console.log("Monday");
// } else if (weekdays == two) {
//   console.log("Tuesday");
// } else if (weekdays == three) {
//   console.log("Wednesday");
// } else if (weekdays == four) {
//   console.log("Thursday");
// } else if (weekdays == five) {
//   console.log("Friday");
// } else if (weekdays == six) {
//   console.log('Saturday');
// }else if (weekdays == seven) {
//   console.log('Sunday');
// }else(weekdays !== '') {
//   console.log('Something went wrong')
// }

