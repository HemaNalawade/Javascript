let arr=[10,20,30,70,50]
//printing array using forEach method
arr.forEach(ele=>console.log(ele))
//pushing new element on the top of the stack
arr.push(300)
console.log("Afterpushing 1 ele top of stack")
arr.forEach(ele=>console.log(ele))
//console.log(arr)

//remove or popping out topmost ele from the stack
let poppedElement =arr.pop()
console.log("Afterpop:",poppedElement)
//pring use forEach method
console.log("Afterpoping 1 ele top of stack")
arr.forEach(ele=>console.log(ele))

//pushing multiple ele from the top of stack
arr.push(367,87,134)
//print arr using fr each
console.log("Afterpushing multiple ele top of stack")
arr.forEach(ele=>console.log(ele))

console.log("size",arr.length)