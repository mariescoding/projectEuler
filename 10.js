/* eslint-disable no-unused-vars */

// q10; Find the sum of all the primes below two million.

// function to check is a number is prime; optimsed 

function checkPrime(checkNum){

    for (let i=2;i<= Math.sqrt(checkNum);i++){
        if(checkNum%i===0 && i!==checkNum){
            return false;
        }
    }
    return true
}

// function to calc sum of prime nums below N

function calcSumPrime(num){
    let sum = 0;

    for(let i=2;i<num;i++){
        if(checkPrime(i)){
            sum+= i
        }
    }
    return sum
}


// main code 

calcSumPrime(10)

