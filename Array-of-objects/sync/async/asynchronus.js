function f1(){
    console.log('First');
}
function f2(){
    console.log('Second');
}
function f3(){
    console.log('Third');
}


f1();

setTimeout(f2, 2000)

f3();


//Event Loop --->

//Micro Task Queue - First Periority
    //Promise 


// Macro Task Queue - Second
    //setTimeOut
    //setInterval

    