//Filter = given condition it will run
let emp = [
    {empName:'Dhina', salary:23000},
    {empName:'Roja', salary:30000},
    {empName:"Rani", salary:25000}
]

// let filterFun = emp.filter(val => val.salary>23000)
// let filterFun = emp.filter(val => val.salary>23000).fill({id:1, name:'xyz'})


// console.log(filterFun);

//Find Fun

let filterdatafind = emp.find((val)=>{
    return val.salary>20000
})

console.log(filterdatafind);
