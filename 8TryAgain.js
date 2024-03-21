
// Q 8: Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

// sliding window approach 


function getArray(num){
    let digitArray = Array.from(String(num), Number);
    return digitArray;
}

function arrayProduct(arrayCalc){
    let product = 1;
    for(let i of arrayCalc){
        product = product * i
    }
    return product;
}

function largestAdjacentProduct( arrayCheck , n ){

    // look at notion page 
    let start = 0;
    let end = n-1;
    let largest = 0;
    let currentProd = arrayProduct(arrayCheck.slice(start, end+1))

    while(end<arrayCheck.length){
        end ++ 
        currentProd = currentProd * (arrayCheck[end]) / (arrayCheck[start])
        if(currentProd > largest){
            largest = currentProd;
        }
        start ++
    }

    return largest;

}
// main code 

let project = getArray()
largestAdjacentProduct(project, 13)
