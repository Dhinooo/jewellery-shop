let person ={
    pName: 'Dhina',
    Age: 23
}
// console.log(person);


//Object.create

// let newObj = Object.create(person)
// newObj.location = 'Tamilnadu'
// console.log(newObj.__proto__);

// console.log(Object.getPrototypeOf(newObj));

//Object.assign

let person1 = {
    id: 'QUIR1',
    name1: 'Rams'
}

// Object.assign(person1,{role:'Frontend',salary:1000})

// console.log(person1);

//Object.entries

let employee ={
    ename: 'MURUGAN',
    eID: 'EWERW2'
}

let newEmployee = Object.entries(employee)

// console.log(employee);
// console.log(newEmployee);


let multiArr = Object.entries(employee)
// console.log(multiArr);



//Object.fromEntries

let normalobj = Object.fromEntries(multiArr)

// console.log(normalobj);


//Object.keys

let onlykeys = Object.keys(employee)

// console.log(keys);


//Object.values

let onlyvalues = Object.values(employee)
// console.log(onlyvalues);


//Object.freeze

let freeze = {
    id: 1,
}

Object.freeze(freeze)


freeze.name1 = 'js'

freeze.id = '23'

console.log(freeze);


//Object.isFrozen

console.log(Object.isFrozen(freeze));
