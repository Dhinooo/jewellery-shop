let arr = [10, 2, 3, 4, 5]

//10 + 2 + 3+ 4+ 5 => 24

totalval = 0 // 24

for (i = 0; i < arr.length; i++) {
  totalval = totalval + arr[i]
}

// 1st => totalVal = 0 + 10 => 10
// 2nd => totalVal = 10 + 2 => 12
// 5th => totalVal = 19 + 5 => 24

console.log(totalval)

//Reduce Method

let totalval1 = arr.reduce((acc, cElement, index, array) => {
  return acc + cElement
}, 0)

//[10, 2, 3, 4, 5]
//1st => 0 + 10 = 10
//2st => 10 + 2 = 12
//3st = 12 + 3 = 15
//4st = 15 + 4 = 19
//5st = 19 + 5 = 24

console.log(totalval1)

let employees = [
  { eName: 'dhina', salary: 10000 },
  { eName: 'arun', salary: 15000 },
  { eName: 'raja', salary: 20000 },
  { eName: 'ramar', salary: 25000 },
  { eName: 'malar', salary: 30000 }
]
let calcTotalVal = employees.reduce((acc, cElement)=>{return acc + cElement.salary}, 0)

console.log(calcTotalVal);
