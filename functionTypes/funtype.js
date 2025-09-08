// Named Function

// function add(uName){
//     console.log('Named Funtion '+ uName);
    
// }
// add("Im a Function")

// Ananomous Funtion

// let ananfun = function(uName){
//     console.log('Ananomous function '+uName);
// }
// ananfun('Im a ananomous function')

//Arrow Function

// let fatArrow = (uName) => console.log('Im a Arrow function ' + uName);
    

// fatArrow('Function Name is ')

// let newfun = (name1) => console.log(name1);
// newfun('Dhina')

// let firstaName = 'Dhina'

// let returnname = fname => fname

// let finalOutput = returnname(firstaName)

// console.log(finalOutput);


//Higher order Function

// function fun1(){
//     console.log("Im a higher order function");
// }

// function fun2(){
//     console.log("I am a callback function");
// }

// // fun1(fun2())

// fun2(fun1())

function add(callback,callback,a,b){
    console.log(a+b);
    callback(100,200)
    callback(1,2) 
}
function subtract(num1,num2){
    console.log(num1+num2);
    
}
function multi(num3,num4){
    console.log(num3*num4);
}
add(multi,subtract,10,20)