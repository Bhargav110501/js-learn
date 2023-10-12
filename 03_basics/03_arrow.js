//Arrow functions
// this keyword describes about cuurrent context

const user = {
    username: "Bhargav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);        
        // console.log(this);
    }
}

// user.welcomeMessage
// user.username = "Chinna"
// user.welcomeMessage() //Chinna , welcom to website
// console.log(this); // {}

// user.welcomeMessage
// user.username = "Chinna"
// user.welcomeMessage()
/*
Chinna , welcome to website
{
  username: 'Chinna',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
// console.log(this);//{}

/*
function chai() {
    let username = "bhargav"
    console.log(this);
}

chai()

*/
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}
*/
/*
function chai1() {
    let username = "bhargav"
    console.log(this.username);//undefined
}

chai1()
*/

/*
const chai = function () {
    let username = "Bhargav"
    console.log(this.username);// undefined
}
chai()
*/

// Arrow functions

const chai = () => {
    let username = "Bhargav"
    console.log(this);// undefined
}
chai()

// Explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4)); // 7

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;
    
// console.log(addTwo(3,4));7

// const addTwo = (num1, num2) => ( num1 + num2 );
// console.log(addTwo(3,4)); // 7

// const addTwo = (num1, num2) => {username : "Bhargav"};
// console.log(addTwo(3,4)); // undefined

const addTwo = (num1, num2) => ({username : "Bhargav"});
console.log(addTwo(3,4)); // { username: 'Bhargav' }


// const myArray = [2, 5, 3, 7 ,8]


// myArray.forEach()



