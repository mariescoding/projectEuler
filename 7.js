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

function findNPrime(num){
    let primeCount = 0;
    let iterateNum = 2;
    let primeNum = 0;

    while(primeCount<num){
        
        if(checkPrime(iterateNum)){
            primeCount++
            primeNum = iterateNum
        } 
        iterateNum++
    }
    
    return primeNum

}

// main code 

console.log(findNPrime(10001))