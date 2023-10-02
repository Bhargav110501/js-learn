// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); //1

// Array methods

// myArr.push(6)
// myArr.push(7)  // inserts element at the last of the array
// myArr.pop() // removes last element from the array

// myArr.unshift(9)  // inserts element 9 at the beginning of the array
// myArr.shift()    // removes first elemet from the array

// console.log(myArr.includes(9)); // checks for element present in the array if yes returns true else false
// console.log(myArr.indexOf(3)); // returns element present at the particular index

const newArr = myArr.join()

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr); //object
// console.log( newArr);  //0,1,2,3,4,5
// console.log(typeof newArr); //string

// slice, splice

console.log("A ", myArr);  //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);  //[ 1, 2 ]
console.log("B ", myArr);  //B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //C  [ 0, 4, 5 ]
console.log(myn2);  //[ 1, 2, 3 ]