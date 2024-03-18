/* eslint-disable no-unused-vars */
// Q 3
// A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.
// Find the largest palindrome made from the product of two $3$-digit numbers.


// create array of digits of a number 

// let getDigitArray = (num2) =>{

//     let arrayDigits = []

//     for(let i = (getlength(num2));i==1;i--){
//         let digit = 0
//         digit = Math.floor(num2/(1*i))
//         arrayDigits.push(digit)
//     }

//     return arrayDigits
// }


// function to determine whether a number is a palindrome or not 

let isPalindrome = (num) =>{

    let isPalindrome = true; 

    let numDigits = Array.from(String(num), Number);

    for(let i=0;((numDigits.length-i-1) - i > 0);i++){

        let firstNum = numDigits[i]
        let secondNum = numDigits[numDigits.length-i-1]

        if(firstNum != secondNum)isPalindrome =  false
        
    }
    return isPalindrome

}


// main code 

function findPalindrome(){

    let i = 999;
    let j = 999;
    let k = 0

    while(k>-1){
        
        let product = i * j 
    
        if (isPalindrome(product)){
            console.log(i,j, product)
            return product
        } 

        if (k%2==0){
            j--
        }else{
             i--
        }
    
        k ++  
        
    }


    // for (let i =999;i>99;i--){
    //     for(let j =999;j>99;j--){


    //         let product = i * j 
    //         if (isPalindrome(product)) return product


    //     }
    // }
    
}

findPalindrome()

