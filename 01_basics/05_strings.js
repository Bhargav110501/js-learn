const name = "Bhargav"
const repoCount = 11

// console.log(name + repoCount + " Value"); //Bhargav11 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is Bhargav and my repo count is 11s 

const gameName = new String('Bhargav-bandi-11')

// console.log(gameName[0]); //B
// console.log(gameName.__proto__); //{}


console.log(gameName.length); //7
console.log(gameName.toUpperCase()); //BHARGAV
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf('t')); //-1

const newString = gameName.substring(0, 4)
console.log(newString); //Bhar

const anotherString = gameName.slice(-7, 3)
console.log(anotherString); //Bha

const newStringOne = "   bhargav    "
console.log(newStringOne);//   bhargav    .
console.log(newStringOne.trim());//bhargav
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://Bhargav.com/Bhargav%11Bandi"

console.log(url.replace('%11', '-'))//https://Bhargav.com/Bhargav-Bandi

console.log(url.includes('sundar'))//false
console.log(url.includes('Bhargav'))//true
console.log(gameName.split('-'));//[ 'Bhargav', 'bandi', '11' ]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

/*
In JavaScript, you cannot traverse from a higher negative index to a lower negative index using the slice() function or any other standard string method. The slice() function, as well as most other string methods, expects the start index to be less than the end index when using positive indices or zero-based indices.

When using negative indices, you can only traverse from left to right (from lower negative index to higher negative index) or from right to left (from lower positive index to higher positive index). You cannot reverse the start and end indices when using negative indices with slice().

const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: " "


const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"

const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World"
*/
//To know more about string methods go to inspect and open console and give a string variable and then run it then click on drop down and we get them or else we can go to the MDN references string methods also.