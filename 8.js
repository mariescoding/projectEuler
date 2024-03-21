/* eslint-disable no-unused-vars */

// Q 8: Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

// question to mike: when i use this code, the answer gives 0, and the array from getArrays has NaN inside it. works with smaller numbers. 
// is this to do with the code or the number being too large?

// function to get array of digits in a number 

function getArray(num){
    let digitArray = Array.from(String(num), Number);
    return digitArray;
}

// function to calculate products of elements in array 
// add checks 

function arrayProduct(arrayCalc){
    let product = 1;
    for(let i of arrayCalc){
        product = product * i
    }
    return product;
}


// function to find subarray of length n with largest product 
// gets array, length of subarray

function largestAdjacentProduct( arrayCheck , n ){

    let largest = 0; 

    for(let i =0; i<=arrayCheck.length-n; i++){
        
        let start = i
        let end = i + n

        let subArray = arrayCheck.slice(start, end)
        
        if(arrayProduct(subArray) > largest){
            largest = arrayProduct(subArray);
            console.log(largest, subArray)
            
        }     

    }
   
    return largest; 
}

// main code 

let project = getArray()
largestAdjacentProduct(project, 13)
