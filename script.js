// Comparison Operartors: > , >= , < , <= , == , != , === , !==
// Boolean Expresion : Any expression operatotr resulting in true and false
// Come up with a 6 different boolean expressions
// Have 3 true and have three false
// use 6 different boolen operators
// one
// let x = 0,
//   y = 10,
//   z = -5;
// let word1 = "puppy",
//   word2 = "kitten",
//   word3 = "PUPPY";

// let bool1 = x < y;
// console.log(bool1); //true
// // two
// let bool2 = word1 == word3;
// console.log(bool2); //false

// // three
// let bool3 = y != x;
// console.log(bool3); // true
// // four
// let bool4 = 10 >= z;
// console.log(bool4); //true
// // five
// let bool5 = word1 === x;
// console.log(bool5); //false
// // six
// let bool6 = z > y;
// console.log(bool6); //false

// Example. Surfs Up.
// let waveheight = +prompt("How high are the waves?");

// if (waveheight >= 6) {
//   console.log("Great day for surfing");
// } else if (waveheight >= 3) {
//   console.log("Go body boarding!");
// } else if (waveheight >= 4) {
//   console.log("Go body boarding!");
// } else if (waveheight >= 5) {
//   console.log("Go body boarding!");
// } else if ((waveheight = 6)) {
//   console.log("Go body boarding!");
// } else if (waveheight < 0) {
//   console.log("Go for a swim");
// } else if (waveheight >= 1) {
//   console.log("Go for a swim");
// } else if (waveheight >= 2) {
//   console.log("Go for a swim");
// } else if ((waveheight = 3)) {
//   console.log("Go for a swim");
// } else console.log("Whoa! what kind of sirfinf is that");

// Example. Comics.
// var hero = prompt("Enter a suoerhero");
// if (hero == "Batman") {
//   console.log("DC Comics ");
// }
// if (hero == "wonder women") {
//   console.log("DC Comics");
// }
// if (hero == "captain america") {
//   console.log("marvel");
// }
// if (hero == "spiderman") {
//   console.log("marvel");
// }

// Example Secret Number
// var secretnumber = 7;
// var guess = +prompt("Guess a number between 1 and 10 ");

// if (secretnumber == guess) {
//   // true? run this code
//   console.log("YOU WIN!");
// } else {
//   // false?run this code instead
//   console.log("YOU LOSE:(");
// }

// Example. Surfs Up Part 2.

// Example. Circle Area.
// let rad = +prompt("Enter circle radius");
// let area = Math.PI * rad ** 2;
// if (rad < -1) {
//   alert("Negative numbers are illegeal ");
// } else {
//   alert("The area of circle with radius " + rad + " is " + area.toFixed(2));
// }

// Example Secret Number Part 2.
// If user is wrong , says guess was too high / too low
// var secretnumber = 7;
// var guess = +prompt("Guess a number between 1 and 10 ");

// if (secretnumber == guess) {
//   // true? run this code
//   console.log("YOU WIN!");
// } else {
//   // false?run this code instead
//   console.log("YOU LOSE:(");
//   if (guess > secretnumber) {
//     console.log("YOur guess was too high");
//   } else {
//     console.log("YOur guess was too low");
//   }
// }

// Example. Movie ratings
// let age = +prompt("How old are you?");
// if (age > 17) {
//   console.log("You can see R-rated movies");
// } else if (age >= 13) {
//   console.log("You can see PG-rated movies");
// } else if (age >= 5) {
//   console.log("You can see PG/G-rated movies");
// } else {
//   console.log("You are too young for movies");
// }
// Example. Surfs Up Part 3.
// let waveheight = +prompt("How high are the waves?");

// if (waveheight >= 6) {
//   console.log("Great day for surfing");
// } else if (waveheight >= 3) {
//   console.log("Go body boarding!");
// } else if (waveheight >= 4) {
//   console.log("Go body boarding!");
// } else if (waveheight >= 5) {
//   console.log("Go body boarding!");
// } else if ((waveheight = 6)) {
//   console.log("Go body boarding!");
// } else if (waveheight < 0) {
//   console.log("Go for a swim");
// } else if (waveheight >= 1) {
//   console.log("Go for a swim");
// } else if (waveheight >= 2) {
//   console.log("Go for a swim");
// } else if ((waveheight = 3)) {
//   console.log("Go for a swim");
// } else console.log("Whoa! what kind of sirfinf is that");

// Exercise 1
// let copies = +prompt("How many numbers of copies are needed");
// if (copies > 1000) {
//   console.log("$0.25 per copy");
//   let numofcopies1 = copies * 0.25;

//   console.log("$" + numofcopies1);
// } else if ((copies = 0)) {
//   console.log("0 per copy");
//   let numofcopies2 = copies;

//   console.log("$" + numofcopies2);
// } else if (copies < 99) {
//   console.log("$0.30 per copy");
//   let numofcopies2 = copies * 0.3;

//   console.log("$" + numofcopies2);
// } else if (copies < 500) {
//   console.log("$0.28 per copy");
//   let numofcopies2 = copies * 0.28;

//   console.log("$" + numofcopies2);
// } else if (copies < 750) {
//   console.log("$0.27 per copy");
//   let numofcopies2 = copies * 0.27;

//   console.log("$" + numofcopies2);
// } else if (copies < 1000) {
//   console.log("$0.26 per copy");
//   let numofcopies2 = copies * 0.26;

//   console.log("$" + numofcopies2);
// } else {
//   console.log("wrong number");
// }

// console.log(copies + " papers");

// 1
// var x = 17;
// if (x < 17) {
//   console.log("A");
// }
// console.log("B");

// 2
// var x = "Cat";
// if (x != "Cat") {
//   console.log("A");
// } else if (x.toLowerCase() == "cat") {
//   console.log("B");
// } else {
//   console.log("C");
// }
// console.log("D");

//3
// var z = 50;
// if (z != 49) {
//   console.log("A");
// }
// if (z > 50) {
//   console.log("B");
// }
// if (z <= 50) {
//   console.log("C");
// }
// if (z == "50") {
//   console.log("D");
// }

// 4
// var x = "kitten";
// var y = "puppy";

// if (x != "cat") {
//   console.log("A");
// } else {
//   console.log("B");
// }

// if (y.toLowerCase() == "Puppy") {
//   console.log("C");
// } else {
//   console.log("D");
// }
// 5
// var x = 0;
// var y = 3;

// x += y;
// y = y * 2;

// if (x < 3) {
//   console.log("A");
// } else {
//   console.log("B");
// }

// if (y == 6) {
//   console.log("C");
// }
// console.log("D");
// 5

// var w = "hello ";
// var t = "world";
// w += t; //hello world
// t += " traveller"; //world traveler
// if (w == "hello") {
//   console.log("A");
// } else if (w == "hello world") {
//   console.log("B");
// } else {
//   console.log("C");
// }
// if (t === "hello world traveller") {
//   console.log("C");
// }
// console.log(t);

// 6

// let a = 5;
// let b = 10;

// if (a < b) {
//   console.log("a is less than b");
// } else if (b < a) {
//   console.log("b is less than a");
// } else {
//   console.log("a equals b");
// }

// 7

// let num = 15;

// if (num % 2) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

// 8

// let num = 15;

// if (num % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");

//   if (num > 10) console.log("The number is odd and greater than 10");
//   else console.log("The number is odd and less than or equal to 10");
// }

// 9

// let word = +prompt("Enter a word");
// if ((word.length = 0)) {
//   console.log("You did not enter a word");
// } else {
//   console.log("Thanks!");
// }

// 10
// let letter = +prompt("Enter a single letter");

// if (letter.length == 1) {
//   console.log("Too many letters!");
// } else {
//   console.log("Thanks!");
// }

// 11

let number = +prompt("Enter a number: ");

let even = (number / 2) % 0;
let odd = (number / 2) % 1;
if (number > 0) {
  console.log(number + " is a positive number.");
} else if (number < 0) {
  console.log(number + " is a negative number.");
} else {
  console.log("not a number");
}
if (even == number) {
  console.log(number + " is a even number.");
} else if (odd == number) {
  console.log(number + " is a odd number.");
} else {
  console.log("not even not odd");
}
