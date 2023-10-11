// let a = 10;
// const b =20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

var c = 300;
// the code which is written outside the block the scope is called global scope

let a = 300

// The code which is written in the if block the scope is called block scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // INNER:  10
}

// console.log(a); // 300
// console.log(b);
// console.log(c); // 300



// Nested scope

function one(){0
    const username = "Bhargav"

    function two(){
        const website = "youtube"
        // console.log(username); // Bhargav
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "Bhargav"
    if (username === "Bhargav") {
        const website = " youtube"
        // console.log(username + website); //Bhargav youtube
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6

function addone(num){
    return num + 1
}



addTwo(5) // error
const addTwo = function(num){
    return num + 2
}

// addTwo(5)