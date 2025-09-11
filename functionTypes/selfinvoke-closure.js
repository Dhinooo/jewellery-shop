// Normal Function

function normalFun () {
  console.log('Executed whenever i called normal Fun')
}
normalFun()
normalFun();
//------------------------------

// Selfinvoke Function

//IIFE - Immediatley Invoked Function Expression 

(function iifeFun(userName, age) {
  console.log('Self Invoked Function ', userName,age)
})('Dhinoo',24)
iifeFun()
