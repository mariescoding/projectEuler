/* eslint-disable no-unused-vars */

// Q9: There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product of abc. 

// function to check if pythagoream triple , received array, returns boolean 

function isPyTriple(arr){
    let a = Math.pow(arr[0],2)
    let b = Math.pow(arr[1],2)
    let c = Math.pow(arr[2],2)
    return ( a + b == c)

}

// function to check is sum is n , received array, returns boolean 


function isSum(arr, n){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
       sum+= arr[i]
    }
    return (sum == n)
}


// function to find subsequence from an array that meets condition, received array & integer n & condition functions (?), returns subsequence

function findSubsequence(){
    for(let a=1;a<500, a++){
        for(let b = 2; b<500; b++){
            for(let c = 3; c<500;c++){
                let checkArray= [a,b,c]
                if(isPyTriple(checkArray) && isSum(checkArray, 1000)) return a*b*c
                

            }

        }
    }
}


// main code

findSubsequence()
