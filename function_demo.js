//define function
function greet(){
    console.log("good morning!")
}
//calling function
greet()
greet()

function add(x,y){
    var z=x+y;
    console.log("Addition:",z);
}
//calling function with parameter value
add(10,20)
//function with parameter and return result
function mul(a,b){
    return a*b;
}
a=5
b=8
z=a+b
var result=z
console.log("multiplication is",result)
var result=mul(5,8)
console.log("multiplication is",result)
console.log("multiplication is",mul(15,7))