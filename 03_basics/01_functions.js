
function myName(){  // function definition
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("G");
    console.log("A");
    console.log("V");
}

// myName() // reference
/*
B
H
A
R
G
A
V
*/

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}
// addTwoNumbers(); //NaN
// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3,null); // 3

// const result = addTwoNumbers(3, 5); //
// console.log("Result: " , result);// Resule:  undefined

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); // Result:  8


function loginUserMessage(username ){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Bhargav")) // Bhargav just logged in
// console.log(loginUserMessage())// undefined just logged in

function loginUserMessage1(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`
    
}
// console.log(loginUserMessage1()) 
/* Please enter a username 
undefined */


function loginUserMessage2(username = "Chinna"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`
    
}
// console.log(loginUserMessage2()) // Chinna just logged in




// function calculateCartPrice(...num1){
//     return num1
// }
//Rest operator or spread operator ()...)
// console.log(calculateCartPrice(200, 400, 500, 2000)) //[ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 500, 2000 ]



const user = {
    username: "Bhargav",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`); // Username is Bhargav and price is 199
}

// handleObject(user)

/*
handleObject({
    username: "Chinna",
    prices: 399
}) // Username is Chinna and price is 399
*/


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 300, 500, 1000])); // 300






