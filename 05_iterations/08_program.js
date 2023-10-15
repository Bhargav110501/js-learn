// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue
// }, 0)
// console.log(myTotal);//6


// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//   return accumulator + currentValue
// }, 0)
// console.log(myTotal);//6
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc,curr) => acc+curr ,0)
// console.log(myTotal);

const shoppingCart = [
    {
      itemName: "js course",
      price:2999,
    },
    {
      itemName: "py course",
      price:999,
    },
    {
      itemName: "mobile dev course",
      price:5999,
    },
    {
      itemName: "data science course",
      price:12999,
    }
  ]
  const price2 = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
  console.log(price2);
  // 22996 
  
  
  
  
  