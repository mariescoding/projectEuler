/* eslint-disable no-unused-vars */

// Q 7 : What is the 10001st prime number?

// function to check if a given number is a prime number 

function checkPrime(checkNum){
    let isPrime= true;
    for (let i=2;i<checkNum;i++){
        if(checkNum%i===0 && i!==checkNum){
            isPrime = false;
        }
    }
    return isPrime
}

// function to find prime number array 

function findPrimeByIndex(num){
    let primes = [];
    let count = 0;

    while(count<num){

     
    count++;
    }

   return primes;
}

// main code 

console.log(findPrimeByIndex(10001))

