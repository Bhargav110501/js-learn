"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Bhargav")


let name1 = "bhargav"
let age1 = 22
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object
console.log(typeof "Bhargav"); //string
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*
1) Primitive Data Types:
These are the most basic data types in JavaScript and include:

Number: Represents numeric values, including integers and floating-point numbers.
*/
let age = 30; // Example of a Number
console.log(age);

/*
String: Represents text and is enclosed in single (''), double (" "), or backticks (``) for template literals.
*/
let name = "John";
let greeting = 'Hello, World!';
let multilineString = `
This is a
multiline
string.`;
console.log(name);
console.log(greeting);
console.log(multilineString);
 // Example of a String

/*
Boolean: Represents either true or false.
*/
let isStudent = true;
let isWorking = false;
console.log(isStudent);
console.log(isWorking);
// Example of a Boolean

/*
Undefined: Represents a variable that has been declared but not assigned a value.
*/
let job;
console.log(job); // Output: undefined
// Example of Undefined

/*
Null: Represents an intentional absence of any object or value.
*/
let car = null;
console.log(car); // Example of Null

/*
Symbol (ES6): Represents a unique and immutable value, often used as object property keys.
*/
const uniqueSymbol = Symbol("description");
const anotherSymbol = Symbol("description");
console.log(uniqueSymbol === anotherSymbol); // Output: false (symbols are always unique)
 // Example of a Symbol
 
/*
BigInt (ES11): Represents arbitrary-precision integers, used for very large numbers.
*/
const bigNumber = 1234567890123456789012345678901234567890n; 
console.log(bigNumber);// Example of a BigInt


/*
2) Composite Data Types:
These data types can hold multiple values and are sometimes called reference types:

Object: Represents a collection of key-value pairs and is used for complex data structures.
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  }; 
  console.log(person);
  // Example of an Object

/*
Array: Represents an ordered list of values and is a specialized type of object.
*/  
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Example of an Array

/*
Function: Represents a reusable block of code that can be executed.
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Alice"); // Output: Hello, Alice!
   // Example of a Function


/*
3) Special Data Types:

NaN (Not-a-Number): Represents a value that is not a valid number.
*/  
let result = "hello" / 2; 
console.log(result); // Output: NaN
// Example of NaN

/*
Infinity and -Infinity: Represent positive and negative infinity, respectively.
*/
let positiveInfinity = Infinity; //Example for positiveInfinity
let negativeInfinity = -Infinity; //Example for negativeInfinity
console.log(positiveInfinity);
console.log(negativeInfinity);

/*
Primitive Wrappers (e.g., String, Number, Boolean): JavaScript provides object wrappers for primitive data types, allowing you to call methods on primitive values.
*/
let str = "Hello, World!";
let strLength = str.length; // Accessing the length property of a string using a primitive wrapper
console.log(strLength); // Output: 13
// Example of using a primitive wrapper

/*
JavaScript's dynamic typing allows variables to change their data type during runtime. For example, you can reassign a variable from a number to a string:
*/
let value = 42; // Number
value = "Hello"; // String (dynamic typing)
