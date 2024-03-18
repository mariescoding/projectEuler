/* eslint-disable no-unused-vars */
// Q 3
// A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.
// Find the largest palindrome made from the product of two $3$-digit numbers.

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
// the code is not giving the largest number, i think it is to do with the traversal of i and j .

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
    
}

findPalindrome()

