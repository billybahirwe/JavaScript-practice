// 4 > 3 ; true ("4 is greater than 3")
// 4 >= 3 ; true ("4 is greater than or equal to 3")
// 4 < 3 ; false ("4 is not less than 3")
// 4 <= 3 ; false ("4 is not less than or equal to 3")
// 4 == 4 ; true ("4 is equal to 4")
// 4 === 4 ; true ("4 is strictly equal to 4")
// 4 != 4 ; false ("4 is not different from 4")
// 4 !== 4 ; false ("4 is not strictly different from 4")
// 4 != '4' ; false ("loose comparison allows type coercion, so 4 is equal to '4'")
// 4 == '4' ; true ("loose comparison allows type coercion, so 4 is equal to '4'")
// 4 === '4' ; false ("strict comparison does not allow type coercion, number 4 is not equal to string '4'")


// console.log(4 > 3);    // true
// console.log(4 >= 3);   // true
// console.log(4 < 3);    // false
// console.log(4 <= 3);   // false
// console.log(4 == 4);   // true
// console.log(4 === 4);  // true
// console.log(4 != 4);   // false
// console.log(4 !== 4);  // false
// console.log(4 != '4'); // false
// console.log(4 == '4'); // true
// console.log(4 === '4'); // false

// //exercice 2

// // Declare the variables and assign initial values
// let myAge = 250;
// let yourAge = 25;

// // Calculate the age difference
// let ageDifference = myAge - yourAge;

// // Write the statement
// console.log(`I am ${ageDifference} years older than you.`);


//exercice 3

// // Declare the variable and assign the initial value
// let challenge = '30 Days Of JavaScript';

// // Print the string to the console
// console.log(challenge);

// // Print the length of the string to the console
// console.log(challenge.length);

// // Change all characters to uppercase
// console.log(challenge.toUpperCase());

// // Change all characters to lowercase
// console.log(challenge.toLowerCase());

// // Slice out the first word using substr() or substring()
// console.log(challenge.substr(0, 2)); // Or you can use: challenge.substring(0, 2);

// // Slice out the phrase "Days Of JavaScript" from the string
// console.log(challenge.substring(2));

// // Check if the string contains the word 'Script'
// console.log(challenge.includes('Script'));

// // Split the string into an array
// console.log(challenge.split());

// // Split the string "30 Days Of JavaScript" at the space
// console.log(challenge.split(' '));

// // Split the string 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma
// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(companies.split(', '));

// // Change "30 Days Of JavaScript" to "30 Days Of Python"
// console.log(challenge.replace('JavaScript', 'Python'));


// //exercice 4
// let challenge = '30 Days Of JavaScript';
// console.log(challenge);

// // Character at index 15 using charAt() method
// console.log(challenge.charAt(15)); // Output: 'S'

// // Character code of 'J' using charCodeAt()
// console.log(challenge.charCodeAt(16)); // Output: 74 (ASCII value of 'J')

// // First occurrence of 'a' in "30 Days Of JavaScript" using indexOf()
// console.log(challenge.indexOf('a')); // Output: 3 (first 'a' in "Days")

// // Last occurrence of 'a' in "30 Days Of JavaScript" using lastIndexOf()
// console.log(challenge.lastIndexOf('a')); // Output: 18 (last 'a' in "JavaScript")

// // Find first occurrence of the word 'because' in the sentence
// let sentence = 'You cannot end a sentence with because because because is a conjunction';
// console.log(sentence.indexOf('because')); // Output: 33 (first occurrence of 'because')

// // Find last occurrence of the word 'because' in the sentence
// console.log(sentence.lastIndexOf('because')); // Output: 60 (last occurrence of 'because')

// // Find first occurrence of the word 'because' using search()
// console.log(sentence.search('because')); // Output: 33 (first occurrence of 'because')

// // Remove any trailing whitespace at the beginning and the end of the string using trim()
// let trimmedString = ' 30 Days Of JavaScript '.trim();
// console.log(trimmedString); // Output: '30 Days Of JavaScript'



// //exercice 5

// let challenge = '30 Days Of JavaScript';

// // Use startsWith() to check if the string starts with '30'
// console.log(challenge.startsWith('30')); // Output: true

// // Use endsWith() to check if the string ends with 'JavaScript'
// console.log(challenge.endsWith('JavaScript')); // Output: true

// // Use match() to find all occurrences of 'a' in the string
// console.log(challenge.match(/a/g)); // Output: ['a', 'a', 'a', 'a'] (All 'a's in the string)

// // Use concat() to merge '30 Days of' and 'JavaScript' to form '30 Days Of JavaScript'
// let part1 = '30 Days of';
// let part2 = 'JavaScript';
// console.log(part1.concat(' ', 'Of ', part2)); // Output: '30 Days Of JavaScript'

// // Use repeat() to print '30 Days Of JavaScript' 2 times
// console.log(challenge.repeat(2)); // Output: '30 Days Of JavaScript30 Days Of JavaScript'



// //exercice 6

// // Check if typeof '10' is exactly equal to 10
// let value1 = '10';
// if (typeof value1 === 'string') {
//   value1 = Number(value1); // Make it exactly equal to 10 by converting the string to a number
// }
// console.log(value1 === 10); // Output: true

// // Check if parseFloat('9.8') is equal to 10, if not, make it exactly equal to 10
// let value2 = parseFloat('9.8');
// if (value2 !== 10) {
//   value2 = 10; // Make it exactly equal to 10
// }
// console.log(value2 === 10); // Output: true

// // Check if 'on' is found in both 'python' and 'jargon'
// let python = 'python';
// let jargon = 'jargon';
// console.log(python.includes('on') && jargon.includes('on')); // Output: true (since 'on' is in both)

// // Check if 'jargon' is in the sentence
// let sentence = 'I hope this course is not full of jargon.';
// console.log(sentence.includes('jargon')); // Output: true (since 'jargon' is in the sentence)

// // Generate a random number between 0 and 100 inclusively
// let random1 = Math.floor(Math.random() * 101);
// console.log(random1); // Output: random number between 0 and 100

// // Generate a random number between 50 and 100 inclusively
// let random2 = Math.floor(Math.random() * 51) + 50;
// console.log(random2); // Output: random number between 50 and 100

// // Generate a random number between 0 and 255 inclusively
// let random3 = Math.floor(Math.random() * 256);
// console.log(random3); // Output: random number between 0 and 255

// // Access the 'JavaScript' string characters using a random number
// let jsString = 'JavaScript';
// let randomIndex = Math.floor(Math.random() * jsString.length); 
// console.log(jsString.charAt(randomIndex)); // Output: random character from 'JavaScript'


// //exercice 7

// console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// //2. Slicing out the phrase "because because because" using substr():

// let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let phrase = sentence.substr(33, 23); // Starting from index 33, take 23 characters
// console.log(phrase); // Output: "because because because"



//exercice 8

//1. Declare variables and check their data types using typeof:

let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2025;

// Check data types using typeof
console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

//2. Check if typeof '10' is equal to 10:

let value1 = '10';
console.log(typeof value1 === 'number'); // Output: false because '10' is a string

//3. Check if parseInt('9.8') is equal to 10:
let value2 = parseInt('9.8');
console.log(value2 === 10);  // Output: false (parseInt will return 9, not 10)

//4. Boolean value is either true or false:

let isTrue = true;
let isFalse = false;
console.log(typeof isTrue);  // Output: boolean
console.log(typeof isFalse); // Output: boolean

//5. Three JavaScript statements that provide truthy values:

console.log(1);              // truthy, because 1 is a non-zero number
console.log("Hello");        // truthy, because non-empty string is truthy
console.log([1, 2, 3]);      // truthy, because an array is always truthy (even if empty)


//6. Three JavaScript statements that provide falsy values:
console.log(0);              // falsy, because 0 is falsy
console.log("");             // falsy, because an empty string is falsy
console.log(null);           // falsy, because null is falsy

