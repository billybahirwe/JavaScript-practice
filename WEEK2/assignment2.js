// //exercise 1

// // Get the current date
// const today = new Date();

// // 1. What is the year today?
// const yearToday = today.getFullYear();
// console.log("Year Today:", yearToday);

// // 2. What is the month today as a number?
// const monthToday = today.getMonth() + 1; // getMonth() returns 0 for January, 11 for December
// console.log("Month Today (1-12):", monthToday);

// // 3. What is the date today?
// const dateToday = today.getDate();
// console.log("Date Today:", dateToday);

// // 4. What is the day today as a number?
// const dayToday = today.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
// console.log("Day Today (0=Sunday, 6=Saturday):", dayToday);

// // 5. What is the hour now?
// const hoursNow = today.getHours();
// console.log("Hours Now:", hoursNow);

// // 6. What is the minutes now?
// const minutesNow = today.getMinutes();
// console.log("Minutes Now:", minutesNow);

// // 7. Find out the number of seconds elapsed from January 1, 1970 to now.
// const secondsElapsed = Math.floor(today.getTime() / 1000); // getTime() returns milliseconds
// console.log("Seconds Elapsed since January 1, 1970:", secondsElapsed);


// //exercise 2

// const readline = require("readline");

// // Create an interface for input/output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Prompt user for base and height of the triangle
// rl.question("Enter base: ", (base) => {
//     rl.question("Enter height: ", (height) => {
//         let area = 0.5 * parseFloat(base) * parseFloat(height);
//         console.log(`The area of the triangle is ${area}`);

//         // Prompt user for three sides of the triangle
//         rl.question("Enter side a: ", (a) => {
//             rl.question("Enter side b: ", (b) => {
//                 rl.question("Enter side c: ", (c) => {
//                     let perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c);
//                     console.log(`The perimeter of the triangle is ${perimeter}`);

//                     // Close the readline interface
//                     rl.close();
//                 });
//             });
//         });
//     });
// });


// // Exercise 6 

// // Define the string
// let str = "30 Days Of JavaScript";

// // 1. Use startsWith() method to check if the string starts with "30"
// console.log("Starts with '30':", str.startsWith("30")); // true

// // 2. Use endsWith() method to check if the string ends with "JavaScript"
// console.log("Ends with 'JavaScript':", str.endsWith("JavaScript")); // true

// // 3. Use match() method to find all occurrences of 'a'
// let matches = str.match(/a/gi); // 'g' for global search, 'i' for case-insensitive
// console.log("Occurrences of 'a':", matches); // ["a", "a", "a", "a"]

// // 4. Use concat() method to merge two strings
// let mergedString = "30 Days Of ".concat("JavaScript");
// console.log("Merged String:", mergedString); // "30 Days Of JavaScript"

// // 5. Use repeat() method to print the string 2 times
// console.log("Repeated String:", str.repeat(2)); // "30 Days Of JavaScript30 Days Of JavaScript"



// // exercice 7

// // 1. Check if typeof '10' is exactly equal to 10. If not, convert it to number
// console.log(typeof '10' === typeof 10); // false
// let num = Number('10'); // Convert string '10' to number
// console.log(typeof num === typeof 10); // true

// // 2. Check if parseFloat('9.8') is equal to 10. If not, make it exactly equal to 10
// console.log(parseFloat('9.8') === 10); // false
// let num2 = Math.ceil(parseFloat('9.8')); // Round it up to 10
// console.log(num2 === 10); // true

// // 3. Check if 'on' is found in both "python" and "jargon"
// console.log("python".includes("on") && "jargon".includes("on")); // true

// // 4. Check if "jargon" is in the sentence
// let sentence = "I hope this course is not full of jargon.";
// console.log(sentence.includes("jargon")); // true

// // 5. Generate a random number between 0 and 100 inclusively
// let randomNum1 = Math.floor(Math.random() * 101); // 0 to 100
// console.log(randomNum1);

// // 6. Generate a random number between 50 and 100 inclusively
// let randomNum2 = Math.floor(Math.random() * 51) + 50; // 50 to 100
// console.log(randomNum2);

// // 7. Generate a random number between 0 and 255 inclusively
// let randomNum3 = Math.floor(Math.random() * 256); // 0 to 255
// console.log(randomNum3);

// // 8. Access the 'JavaScript' string characters using a random number
// let jsString = "JavaScript";
// let randomIndex = Math.floor(Math.random() * jsString.length); // Random index within string length
// console.log(jsString[randomIndex]); // Print a random character from "JavaScript"


// exercise 8

function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// Get the current date and time
const now = new Date();
console.log(formatDateTime(now)); // Example output: "2025-03-12 07:05"
