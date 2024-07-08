let arr=[70,17,40,30,10]

//access array elements individually
console.log(arr[3])
console.log(arr[4])
console.log(arr[2])
console.log(arr[0])
console.log(arr[5])
console.log(arr[1])


//iterate over the arry using  fro loop
console.log("using for loop..")
for(let i=0;i<arr.length;i++)
    console.log(arr[i])


//using for..of loop forward only and read
console.log("using for of loop..")
for(let ele of arr)
    console.log(ele)

//iterate in backward direction
console.log("\nusing for loop in backward direction..")
for(let i=arr.length-1;i>=0;i--)
    console.log(arr[i])

//using for..in loop (forward only)
console.log("using for in loop..")
for(let idx in arr)
    console.log("index no:"+idx +"\tElement:"+arr[idx])


//using forEach method of array
console.log("\nusing forEach methoad & anonymous function..")
arr.forEach(function(ele){//callback function
    console.log(ele)
})

console.log("\nusing forEach methoad & arrow function..")
arr.forEach(ele=>console.log(ele))