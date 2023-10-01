const accountId = 144553
let accountEmail = "bhargav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail ="b@b.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
Prefered not to use var
beacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

function exampleVarScope() {
    var x = 10;
    if (true) {
      var x = 20; // This re-declares the outer 'x' variable
    }
    console.log(x); // Outputs 20
  }
  
  function exampleLetScope() {
    let y = 10;
    if (true) {
      let y = 20; // This creates a new 'y' variable within the block
    }
    console.log(y); // Outputs 10
  }

  function exampleConstScope() {
    const z = 10;
    if (true) {
      const z = 20; // This creates a new 'z' variable within the block
      // z = 30; // This would cause an error because 'z' cannot be reassigned
    }
    console.log(z); // Outputs 10
  }
  