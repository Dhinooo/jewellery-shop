// const arr = [10,11,100,101,110,34,23,543,615,76]

// let arrVal = arr.sort((a,b)=>{return a-b})

// console.log(arrVal);
// a - b => postive - Swapping
// a - b => negative - No Swapping
// b - a => postive - Swapping
// b - a => negative - No Swapping
                                            
// a - b => 10 - 11 => -1 => No Swapping [10,11,100,101,110,34,23,543,615,76]
// a - b => 11 - 100 =>  -89 => No Swapping [10,11,100,101,110,34,23,543,615,76]
// a - b => 100 - 101 =>  -1 => No Swapping [10,11,100,101,110,34,23,543,615,76]
// a - b => 101 - 110 =>  -9 => No Swapping [10,11,100,101,110,34,23,543,615,76]
// a - b => 110 - 34 =>  76 => Swapping [10,11,100,101,34,110,23,543,615,76]
// a - b => 110 A/*  */- 34 =>  76 => Swapping [10,11,100,101,34,110,23,543,615,76]

//Descending

// b - a => postive => Swapping 
// b - a => negative => No Swapping


// let newArr = [10,20,30,2,3,4,true,'Dhina']

// let arrVal = newArr.sort((a,b)=> {return b-a})

// console.log(arrVal);

// Some & Every

//Some
// let arr1 = [2,3,5,1,6,3,6,9]

// let arrVal = arr1.some((ele,ind,arr)=>{
//     return ele%2 == 0
// })

// console.log(arrVal);
//Every
let arr1 = [2,3,5,1,6,3,6,9]

let arrVal = arr1.every((ele,ind,arr)=>{
    return ele%2 == 0
})

console.log(arrVal);
