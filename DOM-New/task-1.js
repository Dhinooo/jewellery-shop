const person = {
  name: prompt('Enter your Name','dhina'),
  place: prompt('Enter Your Place'),
  greet () {
    log `My name is ${this.name} and coming from ${this.place}`
  }
}

const personOne = person.greet()

console.log(personOne)
