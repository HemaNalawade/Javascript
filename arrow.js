//define arrow function without parameters
const hello=()=>{
    return "Hello World!"
}

//calling arrow function
console.log(hello())
//define arrow function with single parameter
const greet =name=>"hey " +name;

//calloing arrow funtion
console.log(greet("rohan kumar"))
let message =greet("om kumar")
console.log(message)
//define arrow function  with multiple aparameter
const add=(a,b)=>a+b;
//calling arrow function
console.log("Addition:",add(10,20))


function arithmetic(operation){
    let result=operation(8,3)
    console.log("result is "+result)
}

//arrow function as an argu to another function
arithmetic((x,y)=>x+y)

arithmetic((a,b)=>a-b)
arithmetic((a,b)=>a*b)
arithmetic((a,b)=>a/b)
arithmetic((h,s)=>h%s)

