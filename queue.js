let arr=[10,30,40,50,60]
console.log("Original arry")
arr.forEach(ele=>console.log(ele))
console.log("Size",arr.length)
//adding new ele in queue 

arr.push(400)

console.log("after adding one ele from frong end ")
arr.forEach(ele=>console.log(ele))
console.log("size",arr.length)

//remove frong of the queue
let removeEle= arr.shift()
console.log("Removed front of the queue",removeEle)

console.log("after removing head from front end ")
arr.forEach(ele=>console.log(ele))
console.log("size",arr.length)