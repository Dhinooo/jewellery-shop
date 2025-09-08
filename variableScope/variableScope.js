// function outerFunction(){
//     var functionVar = 'I am variable'
//     // console.log(functionVar);

// }
// outerFunction()

// function blockScope(){
//     let blockVariable = 'Im a block scoped var'
//     const constVariable1 = 'Im a scoped Variable'
//     if(true){

//         // console.log(blockVariable);
//         // console.log(constVariable1);

//     }
// }
// blockScope()

// var globalScopeVar = 'Im accessible throught the global context'
// let blockScoped = 'Im a let variable '
// const blockScoped1 = 'Im a const variable'

// console.log(window.globalScopedVar);
// console.log(window.blockScoped);
// console.log(window.blockScoped1);

let a = 5
var b = 6
const c = 7
function accessGlobalLocalVar () {
  //   var a = 101
  //   let b = 202
  //   const c = 303
//   console.log(a + b + c)

  function innerFunction () {
    // var a = 100
    // let b = 200
    // const c = 300
    console.log(a + b + c)
  }
  innerFunction()
  console.log(a + b + c)
}
accessGlobalLocalVar()
console.log(a + b + c)
