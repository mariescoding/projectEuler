/* eslint-disable no-unused-vars */

// Q6: Find the difference between the sum of the squares of the first one hundred natural numbers 
// and the square of the sum.


// function to find square of sum of 1 to 100 

function numberOne(){
    let sum =0;
    for(let i=1;i<101;i++){
        sum += i;
    }
    return Math.pow(sum,2);
}

//  function to find sum of squares of 1 to 100 

function numberTwo(){
    let sum =0;
    for(let i=1;i<101;i++){
        sum += Math.pow(i,2);
        
    }
    return sum; 
}

// main code 


function findDiff(){
    
    let finalNum = numberOne() - numberTwo(); 
    return finalNum
}
