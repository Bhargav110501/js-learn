// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Bhargav",
    "full name": "Bhargav Bandi",
    [mySym]: "mykey1",
    age: 22,
    location: "Vizianagaram",
    email: "bhargav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //bhargav@google.com
// console.log(JsUser["email"]) //bhargav@google.com
// console.log(JsUser["full name"]) //Bhargav Bandi
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "bhargav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "bhargav@microsoft.com"
// console.log(JsUser);

/* OP
{
  name: 'Bhargav',
  'full name': 'Bhargav Bandi',
  age: 22,
  location: 'Vizianagaram',
  email: 'bhargav@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting); // [Function (anonymous)]
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //String Interpolation(``)
}

console.log(JsUser.greeting()); //Hello JS user
console.log(JsUser.greetingTwo()); //Hello JS user, Bhargav