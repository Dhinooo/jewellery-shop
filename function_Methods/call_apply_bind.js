// let employee = {
//     eName: 'Dhina',
//     Age: 22,
//     introyourself: function(a,b){
//         console.log(a+b);
//         console.log(this.eName);
//     }
// }
// console.log(employee.eName);

// employee.introyourself(10,20)

// eName='Karan'

// let employee1 ={
//     eName: 'Dhoni',
//     eSalary: 2000,
//     introYourself: (a,b)=>{
//         console.log(a+b);
//         console.log(this.eSalary);

//     }
// }

// console.log(this.eName);
// employee1.introYourself(10+20)

//call--Methods

let person = {
  pFName: 'varun',
  pLName: 'kumar'
}

let person1 = {
  pFName: 'Dhina',
  pLName: 'karan',
  pSalary: 1000,
  introYourself: function (a,b) {
    console.log(this.pFName + ' ' + this.pLName +(a+b)  )
    return(a+b)
  }
}
//call
person1.introYourself.call(person, 10, 20)
// person1.introYourself(10,20)

//apply
person1.introYourself.apply(person, [200,300])

//bind
let ansBind = person1.introYourself.bind(person, 2,4)
console.log(ansBind());

