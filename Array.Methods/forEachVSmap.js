let fruits = ['Banana', 'apple', 'mango', 'papaya']

// fruits.forEach(printFruit)

// function printFruit (currentElement, index, totalArray) {
//   console.log(currentElement, index, totalArray)
// }


// fruits.map(function(currentElement, index, totalArray){
//     console.log(currentElement, index, totalArray);
// })

// let newArr = fruits.forEach((cElement)=>{
//     // return cElement
//     // console.log(cElement.toLocaleUpperCase());
    
// })

// console.log(newArr);

// let newArr1 = fruits.map((cElement, index)=>{
//     // return cElement 
//     return {id: index+1, fruit : cElement}
// })

// console.log(newArr1);


// chaing method

// let newArr2 = fruits.map( cEle => cEle.toLocaleUpperCase()).sort().fill("dhina")

// console.log(newArr2);

// let newArr1 = fruits.forEach( cEle => cEle.toLocaleUpperCase()).sort().fill("dhina")

// console.log(newArr1);

//Condition Based Statement

let newArr = fruits.map( (cEle) => {return cEle=="apple"})

console.log(newArr);



 