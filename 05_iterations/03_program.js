// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
/*
1
2
3
4
5
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is ! 
*/

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
    // console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
PS G:\Practice java\
*/
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/
// In this way maps can be iterable but objects cannot be iterable
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);   // myObject is not iterable
// }

