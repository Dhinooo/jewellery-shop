//Break

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//       if (i === 10) {
//         break
//       }
//     console.log(i)

//   }
// }

//continue
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//       if (i === 10) {
//         continue;
//       }
//     console.log(i)

//   }
// }

// Function --

let person1 = {
  name1: 'Dhina',
  age: 23
}

let employeeId = 'ifs234'
let newId = employeeId || 'dnx234'

// console.log(newId);

function printUserName (uName = 'mayle', uAge = 45) {
  // console.log('Hello EveryOne', person1.name1, person1.age)
  // if (uAge < 40) {
  console.log(`Hi ${uName}, your age is ${uAge}`)
  // }
}
// printUserName('Dhina', 23)
// printUserName('karan', 41)
// printUserName('Ramu', 50)
// printUserName('kanna', 70)
// printUserName('Dickvis', 60)
// printUserName('kumar', 39)
// printUserName(undefined,49)

function findrectArea (l, b) {
  let condition = false
  if (condition) {
    return l * b
  } else {
    return null
  }
}
// let newVal = findrectArea(20, 10)

// console.log(findrectArea(100, 40))


function cubic(num){
  // console.log(num ** 3);
  return (num ** 3)
  
}
let val = cubic(4)

console.log(val);

