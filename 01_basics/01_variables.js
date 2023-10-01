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