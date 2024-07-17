//define function with default value
function add(a=10,b=20){
    return a+b;
}
let result=add()
console.log("addition is ", result)
result=add(100)
console.log("addition is ", result)
result=add(100,200)
console.log("addition is ", result)
result=add(undefined,200)
console.log("addition is ", result)

function mul(a=10,b=a,c=a*b)
{
    return c;
}
result=mul()//(a,b,c)
console.log("MULTIPLE",result)
result=mul(5)//(a,b,c)
console.log("MULTIPLE",result)
result=mul(5,3)//(a,b,c)
console.log("MULTIPLE",result)
result=mul(5,3,8)//(a,b,c)
console.log("MULTIPLE",result)



function divide(x,y,z)
{
    return x/z
}
result=divide(7,4,undefined)
console.log("Division ",result)

function divide(x=3,y)
{
    return x/y
}
result=divide(undefined,4)
console.log("Division ",result)