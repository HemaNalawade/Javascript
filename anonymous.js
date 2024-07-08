//anonymous funcation
const add = function(a,b){
    return a + b;
}

//calling anonymous funcation via variable "add"

//add = "How r u!"
let result = add(10,20)
console.log("Addition is "+result)

function math(sum){
    let res = sum(22,45);
    console.log("Sum is ",res)
}

math(add); //funcation as an argument to another function

function myMath(){
               //anonymous funcation as nested funcation
    const mul = function(x,y){
        return x * y;
        }

       
        return mul;  //returning funcation as a result
    }

    const product = myMath()
    let result1 = product(5,3)
    console.log("Multipication is ",result1)

     let res2 = myMath()(8,4); //JQuery Basic
     console.log("Multiplication is ",res2)