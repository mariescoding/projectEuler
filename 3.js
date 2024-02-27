/* eslint-disable no-unused-vars */

function findPrimes(num){
    let primes = [];
   
    for (let i=2;i<num;i++){
        let isPrime= true;
        for (let j=2;j<num;j++){
            if(i%j===0 && i!==j){
                isPrime = false;
            }
        }
        if (isPrime) primes.push(i)
    }
   return primes;
}


// 2. function to find smallest prime factor of a number 

function findSmallPrime(num2){
    let primeStack = findPrimes(num2)
    for(let c in primeStack){
        //if there is prime factor
        if(num2%primeStack[c]===0){
            primeStack.pop(c);
            console.log("prime factor of", num2,"is ", primeStack[c])
            return primeStack[c]
        }
    }
}

// 3. while loop to find largest prime factor of a number

function findLargePrime(num3){
    let bigNum = num3;

    while(findSmallPrime(bigNum)!== undefined){
      
        bigNum = bigNum / findSmallPrime(bigNum);
   
    }
    console.log("largest is ", bigNum)
    return bigNum;
}

console.log(findLargePrime(600851475143))

// optimised (prime factor algorithms)


