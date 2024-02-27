/* eslint-disable no-unused-vars */

// 
let a = 1;
let b = 2; 
let sum = 0;

while (b<4000000){
    if (b%2==0)sum+=b
    let copy = 0
    copy = a;
    a = b;
    b = copy+a;
   
}

console.log(sum)