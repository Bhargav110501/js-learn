// Dates

let myDate = new Date()
// console.log(myDate); //2023-10-01T17:41:31.582Z
// console.log(myDate.toString()); //Sun Oct 01 2023 17:40:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Oct 01 2023
// console.log(myDate.toLocaleString()); //10/1/2023, 5:42:14 PM
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
//console.log(myCreatedDate.toLocaleString());//  1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());//  1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());//  1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());//  1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//1696182328647
// console.log(myCreatedDate.getTime());//1673654400000
// console.log(Math.floor(Date.now()/1000));//1696182363

let newDate = new Date()
console.log(newDate);//2023-10-01T17:46:03.637Z
console.log(newDate.getMonth() + 1);//10
console.log(newDate.getDay());//0

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
