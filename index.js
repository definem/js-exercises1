// <----Bismillah ---->
//NOT ALL PROBLEMS ARE OPTIMAL

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
chala
var num1 = 2;
var num2 = 41;
var num3 = 65;
*/

// // 2-method

// // working with math class functions

// console.log(Math.max(1, 3, 2));

// // 3-method

// const array = [-1, 2, -5, 8, 16];

// let max = array[0],
//   min = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }

// <---- Exercise-6 skipped---->

// <---- Exercise-7---->

// This is a program that checks
// whether numbers are odd

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

// let num1 = +prompt("Number 1");
// let num2 = +prompt("Number 2");
// let num3 = +prompt("Number 3");

// let arr = [num1, num2, num3];

// console.log(arr); // [2,4,1]

// <---- Exercise 8 skipped---->

// <---- Exercise-9---->

// program for checking whether
// numbers are negative or positive

// // method-1

// let number = 1;

// if (number >= 0) console.log("It is a positive number");
// else if (number <= 0) console.log("It is a negative number");
// else console.log("It is not a number");

// // method-2

// var number = +prompt("Enter a number:");

// if (number >= 0) console.log("It is a positive number");
// else if (number <= 0) console.log("It is a negative number");
// else console.log("It is not a number");

// <---- Exercise-10---->

// a program that outputs the days
// of the week based on the input numbers

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

// // method-2

// let weekDay = +prompt ("Enter week day: ");

// if (weekDay === 1) console.log("Du");
// else if (weekDay === 2) console.log("Se");
// else if (weekDay === 3) console.log("Cho");
// else if (weekDay === 4) console.log("Pa");
// else if (weekDay === 5) console.log("Ju");
// else if (weekDay === 6) console.log("Sha");
// else if (weekDay === 7) console.log("Ya");
// else console.log()("Bunday hafta kuni mavjud emas");

// <---- Exercise-11---->

// a program that outputs the number company
// according to the entered phone number code

// // method-1

// let numberCode = 88;

// if (numberCode === 93) console.log("Beeline");
// else if (numberCode === 95) console.log("Ucell");
// else if (numberCode === 97) console.log("Ums");
// else if (numberCode === 99) console.log("Uzmobile");
// else if (numberCode === 88) console.log("Humans");
// else console.log("Such a company does not exist!");

// // method-2

// let numberCode = +prompt ("Enter 2 phone number's code: ");

// if (numberCode === 93) console.log("Beeline");
// else if (numberCode === 95) console.log("Ucell");
// else if (numberCode === 97) console.log("Ums");
// else if (numberCode === 99) console.log("Uzmobile");
// else if (numberCode === 88) console.log("Humans");
// else console.log("Such a company does not exist!");

// // method-3

// let numberCode = +prompt ("2 phone number's code: ");

// const uzmobile = "99";
// const ums = "97";
// const humans = "88";
// const ucell = "95";
// const beeline = "93";

// if (numberCode === 99) console.log("Uzmobile");
// else if (numberCode === 97) console.log("Ums");
// else if (numberCode === 88) console.log("Humans");
// else if (numberCode === 95) console.log("Ucell");
// else if (numberCode === 93) console.log("Beeline");
// else console.log("Such a company does not exist...")

// <---- Exercise-12---->

// This is a program that if you look at it, you will know about...

// // method-1

// let number = 0;

// if (number > 0) {
//   number += 1;
//   console.log(number);
// } else if (number < 0) {
//   number -= 1;
//   console.log(number);
// } else console.log(number);

// // method-2

// var number = +prompt("Enter positive or negative number");

// if (number >= 0) {
//   number += 1;
//   console.log(number);
// } else if (number <= 0) {
//   number -= 1;
//   console.log(number);
// } else console.log("It is not a number");

// <---- Exercise-13---->

//It is not working

// let number = 2;

// if (number >= 0) {
//   number * 3;
//   console.log(number);
// } else if (number <= 0) {
//   number -= 2;
//   console.log(number);
// } else console.log("It is not a number");

// <---- Exercise-14---->

// // method-1 

// // method-2

// const max = Math.max(10, 5);

// // method-3 chala

// let num1 = +prompt("Enter a first number:");
// let num2 = +prompt("Enter a second number:");

// const max = Math.max(num1, num2);

// console.log(max);

//uzra ustoz miyya ishlamayaptide hozi😁🤦🏻‍♀️


// <---- Exercise-15---->

// FIND THE MAX NUMBER

// <---- Exercise-16---->

// FIND THE MIN NUMBER

// <---- Exercise-17---->

// THIS IS A PROGRAM THAT CREATES WITH DOM

// <---- Exercise-18---->

// It's a program that calculates the scholarship according to the student's score.

// let score = +prompt ("Enter ur score: ");

// if (score >= 90 && score <= 100) console.log("Wow! Your scholarship is 200,000 soums");
// else if (score >= 80 && score <= 90) console.log("Wow! Your scholarship is 150,000 soums");
// else if (score >= 70 && score <= 80) console.log("Your scholarship is 140,000 soums");
// else if (score >= 60 && score <= 70) console.log("Your scholarship is 130,000 soums");
// else if (score >= 50 && score <= 60) console.log("Your scholarship is 120,000 soums");
// else if (score >= 40 && score <= 50) console.log("Your scholarship is 110,000 soums");
// else if (score >= 30 && score <= 40) console.log("Your scholarship is 100,000 soums");
// else if (score <= 40) console.log("Oops! Your score isn't enough to get a scholarship.");
// else console.log("Oops! You are expelled from our university cos of ur score.");

// <---- Exercise-19---->

// qilgim kemadi shuni :(

// <---- Exercise-20---->

// Yilga qarab yoshni hisoblovchi dastur.

// I know this method only works for 2023.
// I also know that this program isn't optimal.

// let birthYear = +prompt("Enter your birth year: ");

// let urAge = 2023 - birthYear

// console.log(urAge);

// <---- Exercise-21---->

// To be honest, I didn't even understand what I was doing :|

// let num1 = 2;
// let num2 = 8;
// let num3 = 12;

// if (num1 <= num2) console.log("It's true");
// else if (num1 >= num2) console.log("It's false");
// else if (num2 <= num3) console.log("It's true");
// else if (num2 >= num3) console.log("It's false");

// <---- Exercise-22---->

// // method-1

// let number1 = 2;
// let number2 = 3;

// if (number1 % 2 === 0 || number2 % 2 === 0) console.log("True");
// else if (number1 % 2 === 0 || number2 % 2 === 1) console.log("True");
// else if (number1 % 2 === 1 || number2 % 2 === 1) console.log("False");
// else if (number1 % 2 === 1 || number2 % 2 === 0) console.log("True");

// // method-2

// let number1 = +prompt("Enter first number");
// let number2 = +prompt("Enter second number");

// if (number1 % 2 === 0 && number2 % 2 === 0) console.log("True");
// else if (number1 % 2 === 0 && number2 % 2 === 1) console.log("True");
// else if (number1 % 2 === 1 && number2 % 2 === 1) console.log("False");
// else {
//     console.log("Invalid number")
// }
