let arr= [50,20,40,10,60]
console.log(arr)

//add 3 new elements at index no or position 2
arr.splice(2,0,23,43,65)
console.log("After insert:",arr)

//arr.splice(2,1,23,43,65)
//console.log("After1 insert:",arr)

//arr.splice(2,2,23,43,65)
//console.log("After2 insert:",arr)

//remove 2 ele from index 3
arr.splice(3,2)
console.log("After remove:",arr)


//replace ele at index 1
arr.splice(1,1,7000)
console.log("After replace:",arr)
