/* eslint-disable no-unused-vars */

//  Q11; What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20x20 grid?


function arrayProduct(arrayCalc){
    let product = 1;
    for(let i of arrayCalc){
        product = product * i
    }
    return product;
}

// func to find subarray horizontally 
function searchHorizontal(arrayCheck, n){

    let largest = 0; 

    for(let i =0; i<arrayCheck.length; i++){
        
        for (let j=0; j<=(arrayCheck[i].length)-n; j++){

            let start = j
            let end = j + n
    
            let subArray = arrayCheck[i].slice(start, end)
            
            if(arrayProduct(subArray) > largest){
                largest = arrayProduct(subArray);
               
            }    
          
        }
    }
   
    return largest; 
}


// func to find subarray veritcally 

function searchVertical(arrayCheck, n){

    let largest = 0; 

    for(let j=0; j<arrayCheck.length;j++){

        for (let i=0; i<arrayCheck.length-1; i++){
            
            let subArray= []
            let start = i 
           while(subArray.length < n){
                subArray.push(arrayCheck[start][j])
                start++
           }
            
            if(arrayProduct(subArray) > largest){
                largest = arrayProduct(subArray);
            }    
        }
        }
   
    return largest; 
}

// func to find subarray diagonally 

function searchDiagonal(arrayCheck, n){

    let largest = 0; 

    for(let i =0; i<arrayCheck.length; i++){
        
        for (let j=0; j<=(arrayCheck[i].length)-n; j++){

            // create subarray diagonally 

            
            //

            if(arrayProduct(subArray) > largest){
                largest = arrayProduct(subArray);
               
            }    
          
        }
    }
   
    return largest; 
}


// main code 

function findMatrixProd(arr){

   let horizonLarge = searchHorizontal(arr, 4)
   let vertiLarge = searchVertical(arr, 4)
   let diagLarge = searchDiagonal(arr, 4)

   return 

}

let gridData = [[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12 ,50, 77, 91, 8],[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48,4, 56, 62, 0],
[81, 49 ,31 ,73 ,55, 79, 14 ,29 ,93, 71, 40, 67 ,53 ,88 ,30, 3, 49, 13 ,36 ,65], [], []]

findMatrixProd(gridData)