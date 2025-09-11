function outerFunction(){
    let outerVariable = 'Im From Outer Scope'
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction
}
let innerFun = outerFunction()
innerFun()