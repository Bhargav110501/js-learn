//  execute code
// call stack

// Javascript Execution Context

/*
{} --> Global Execution Context using (this) window object executes under single threaded
1. Global Execution Context
2. Functional Execution Context
3. Eval Execution Context
{} --> Memory Creation phase
   --> Execution Phase
*/

/*  Sample code
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


Steps of Exection
1 Global Excution --> this

2 Memory Phase (Allots memory to all variables)
    val1 --> undefined
    val2 --> undefined
    addNum --> definition {code inside function}
    result1 --> undefined
    result2 --> undefined

3 Execution Phase
val1 <-- 10
val2 <-- 5

adNum -->(new Variable environment + Execution Thread )
            ^
            |
            Memory Phase                
            val1 --> undefined
            val2 --> undefined
            total --> undefined
            ^
            |
            Execution phase
            val1 --> 10
            val2 --> 5
            total --> 15
             now return the total to global execution phase
             After completiopn delete that value
             from execution phase result1 = 15



How many times we create or call function that any times 
a sandbox of (Memory phase + Execution phase) gets created

(new variable environment + Execution Context)
    ^
    |
    Memory Phase                
    val1 --> undefined
    val2 --> undefined
    total --> undefined
    ^
    |
    Execution phase
    val1 --> 
    val2 --> 
    total --> 

*/

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

console.log(result1); // 15
console.log(result2); // 12


// call stack

/*
function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one()
two()
three()
threse is no problem in calling the stack
*/
/*
function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}
one()
two()
three()

Here stacks are created and called one inside other at
this time deletion of stack is taken care with the help of LIFO

*/

