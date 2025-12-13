const newPerson = {
  name: 'Dhina',
  place: 'Trichy',
  greetUser () {
    return `Hello, My Name is ${this.name} and im Coming from ${this.place}`
  }
}

newPerson.name = 'Karan'
newPerson.place = 'Chennai'

const PersonOne = newPerson.greetUser()

// console.log(PersonOne)


// Print To Document 

// document.writeln(PersonOne)

// document.body.innerHTML = `<h1>${PersonOne}</h1>`


const nameInput = prompt('Enter Your Name')
const placeInput = prompt('Enter Your Place')


newPerson.name = nameInput

newPerson.place = placeInput

document.body.innerHTML = `<h1>${newPerson.greetUser()}</h1>`
console.log(newPerson.greetUser());


// console.log(userName);

// document.writeln(userName)

// document.body.innerHTML = `<h2>${userName}</h2>`

