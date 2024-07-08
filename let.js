let a=10
console.log(a)
a="Hello World"
console.log(a)

function fun1(){
    if(true){
        var b=20
        console.log("Inside if b:"+b)

    }
    console.log("Outside if but inside function b:"+b)
}
fun1()

function fun2(){
    if(true){
        var d=30
        console.log("Inside if d:"+d)

    }
    console.log("Outside if but inside function d:"+d)
}
fun3(40)
function fun3(x){
    console.log(x)
    var x=50;// error redeclaring
 console.log(x)
}

//function call
fun3(40)


function fun4(x){
    console.log(x)
   let x=50;// error redeclaring
 console.log(x)
}

//function call
fun4(40)
var c=70
console.log(c)
var c=80
console.log(c)

//let e=120;
//console.log(e);
//let e=120;
//console.log(e);
const b=45
console.timeLog(b)
b=75
console.timeLog(b)
