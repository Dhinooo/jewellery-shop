//Generater Function

// function* genFun () {
//   yield 'Im a First Val'
//   yield 'Im a Sec Val'
//   yield 'Im a Third Val'
//   return 'Final Val'
// }

// let ans = genFun()

// console.log(ans.next().value)

// console.log('First Val Generate')
// console.log(ans.next().value)

// console.log('Second Val Generate')
// console.log(ans.next().value)

// console.log('Third Val Generate')
// console.log(ans.next().done)

//Example

function* url(){
    yield 'https:/'
    yield 'www.dhina.com/'
    yield 'homePage'
}

let original1 = url()
console.log(original1.next().value);
console.log(original1.next().value);
console.log(original1.next().value);

