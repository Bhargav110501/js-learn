// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log('DB CONNECTED');//DB CONNECTED
// }
// chai()

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);//DB CONNECTED
})();

// 1st paranthesis ()  is for function declaration and 2nd () is for executiom


/*
IIFE, which stands for Immediately Invoked Function Expression, 
is employed in JavaScript to prevent the contamination of 
global variables by encapsulating code within a self-executing
function.
*/

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED ${name}`); // DB CONNECTED Bhargav
})('Bhargav')



