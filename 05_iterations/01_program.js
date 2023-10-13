// for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);    
// }
// console.log(element);
/*
1
2
3
4
5
6
7
8
9
10
*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);    
}
/*
0
1
2
3
4
5 is best number
5
6
7
8
9
10
*/

for (let i = 0; i <=4; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <=4 ; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);   
    }  
}
/*
Outer loop value 0
inner loop value 0 and inner loop 0
inner loop value 1 and inner loop 0
inner loop value 2 and inner loop 0
inner loop value 3 and inner loop 0
inner loop value 4 and inner loop 0
Outer loop value 1
inner loop value 0 and inner loop 1
inner loop value 1 and inner loop 1
inner loop value 2 and inner loop 1
inner loop value 3 and inner loop 1
inner loop value 4 and inner loop 1
Outer loop value 2
inner loop value 0 and inner loop 2
inner loop value 1 and inner loop 2
inner loop value 2 and inner loop 2
inner loop value 3 and inner loop 2
inner loop value 4 and inner loop 2
Outer loop value 3
inner loop value 0 and inner loop 3
inner loop value 1 and inner loop 3
inner loop value 2 and inner loop 3
inner loop value 3 and inner loop 3
inner loop value 4 and inner loop 3
Outer loop value 4
inner loop value 0 and inner loop 4
inner loop value 1 and inner loop 4
inner loop value 2 and inner loop 4
inner loop value 3 and inner loop 4
inner loop value 4 and inner loop 4
*/

for (let i = 1; i <=5; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <=10 ; j++) {
        // console.log(i + '*' + j + ' = ' + i*j);
    }  
}

/*
Outer loop value 1
1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
1*5 = 5
1*6 = 6
1*7 = 7
1*8 = 8
1*9 = 9
1*10 = 10
Outer loop value 2
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20
Outer loop value 3
3*1 = 3
3*2 = 6
3*3 = 9
3*4 = 12
3*5 = 15
3*6 = 18
3*7 = 21
3*8 = 24
3*9 = 27
3*10 = 30
Outer loop value 4
4*1 = 4
4*2 = 8
4*3 = 12
4*4 = 16
4*5 = 20
4*6 = 24
4*7 = 28
4*8 = 32
4*9 = 36
4*10 = 40
Outer loop value 5
5*1 = 5
5*2 = 10
5*3 = 15
5*4 = 20
5*5 = 25
5*6 = 30
5*7 = 35
5*8 = 40
5*9 = 45
5*10 = 50
*/ 

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);// 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
/*
flash
batman
superman
*/

// break and continue

for (let index = 0; index <=20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
    // console.log(`value of i is ${index}`);
}

/*
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
*/

for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
/*
value of i is 0
value of i is 1
value of i is 2
value of i is 3
value of i is 4
Detected 5
value of i is 6
value of i is 7
value of i is 8
value of i is 9
value of i is 10
value of i is 11
value of i is 12
value of i is 13
value of i is 14
value of i is 15
value of i is 16
value of i is 17
value of i is 18
value of i is 19
value of i is 20
*/ 








