// let obj1 = {
//   name1: 'Dhina',
//   role: 'Developer'
// }

// let obj2 = { ...obj1 }

// obj2.name1 = 'karan'

// console.log(obj1, obj2)

// // Obj - Shallow Copy

// let person = {
//   name1: 'Dhina',
//   role: 'Youtuber',
//   hobbies: {
//     cricket: 't20 player',
//     football: '60 mins'
//   }
// }


// Obj - Deep Copy

// let person2 = { ...person, hobbies: { ...person.hobbies } }

// // let person3 = JSON.stringify(person)

// let newObj = JSON.parse(JSON.stringify(person))

// person.role = 'Video Creator'

// person.hobbies.cricket = 'ODI Player'

// console.log(person, person2)
// console.log(newObj)


 //Array - Shallow Copy

 let arr = [1,2,3,[4,5,6]]

 let arr1 = [ ...arr ]

//Deep-Copy

 let newArr = JSON.parse (JSON.stringify( arr))

 arr[0] = 'One'

 arr[3][0] = 'Four'

 newArr[3][1] = 'five'

 console.log(arr, arr1);

 console.log( newArr);
 
 