/* eslint-disable no-unused-vars */
// Q5:  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Question for Mike: for finding the smallest one, binary search would not work, right? do i not have another options besides linear search?



// function to check if a given number is divisible by 1 to 20 , return true if so 

function dividesOneTwenty(num){
    let isDivisible = true

    for(let i=1;i<21;i++){
        if(num % i !== 0) isDivisible = false
    }

    return isDivisible 
}


// main code 

function findSmallest(){
    let number = 2521

    while(number>0){
        if (dividesOneTwenty(number) == true) return number
        number++
    }
}

findSmallest()
