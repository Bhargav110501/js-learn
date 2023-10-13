const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0 Bigint 0n, "", null, undefined, NaN

// truthy values
// "0", 'falsy', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty"); // Array is empty
// }
// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty"); // Object is empty
// }

// In console
/*
>false == 0
>true

>false == ''
>true

>0 == ''
>true
*/

// // Nullish Coalescing Operator (??): null un defined

// let val1
// // val1 = 5 ?? 10
// // console.log(val1);//5
// // val1 = null ?? 10
// // console.log(val1); // 10

// // val1 = undefined ?? 15
// // console.log(val1); // 15

// val1 = null ?? 10 ?? 20
// // console.log(val1); //10rator (??): null un defined

// let val1
// // val1 = 5 ?? 10
// // console.log(val1);//5
// // val1 = null ?? 10
// // console.log(val1); // 10

// // val1 = undefined ?? 15
// // console.log(val1); // 15

// val1 = null ?? 10 ?? 20
// // console.log(val1); //10


// Ternary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") // more than 80

