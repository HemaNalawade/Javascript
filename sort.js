let arr=[40,20,3,30,7,10,80]
console.log("Original array:",arr)
arr.sort()
console.log("Sorted in asencdeing order:",arr)

//sort with compare function
arr.sort(function(e1,e2){
    if(e1>e2)
        return 1;
    else if(e1<e2)
        return -1;
    else 
    return 0;

})
console.log("Sorted using compare function in asending oreder:")
console.log(arr)

//sort with compare function in desending order.
arr.sort(   (e1,e2)=>e1<e2?1:-1  )
console.log("Sorted using compare function in deending oreder:")
console.log(arr)

let names=["Hem","Yogesh","Pratik","Sham","Ram","Am"]
console.log("Original array",names)

//sorting in ascending order

names.sort((n1,n2)=>n1>n2?1:-1)
console.log("sorted names in ac",names)

//sorting in decending order

names.sort((n1,n2)=>n1>n2?-1:1)
console.log("sorted names in ac",names)
