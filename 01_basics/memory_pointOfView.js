Stack (primitive), Heap (Non-Primitive)

let myName = "Bhargav"
let anotherName = myName
anothername = "Chinna"

console.log(myName); //Bhargav
console.log(anotherName); //Bhargav

let userOne = {
	email: "user@google.com",
	upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhargav@gmail.com"

console.log(userOne.email); //bhargav@gmail.com
console.log(userTwo.email); //bhargav@gmail.com