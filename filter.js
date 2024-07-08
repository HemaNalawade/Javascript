let arr=[50,30,70,60,40]

console.log(arr)
//filter arr with ele grate than 40
let eleGt40=arr.filter(function(ele){
    return ele>40
})
console.log(eleGt40)

//filter array wuith element smaller than 40

let eleLT40=arr.filter(ele=>ele<40)
console.log(eleLT40)

let cities=["Nashik","dhule","ale","Nagpur","pune"]
console.log(cities)

//filter cities with nasme of city starting letter"n"
let filteredCities = cities.filter( city=>city.startsWith('N') )
console.log(filteredCities)

 filteredCities = cities.filter( city=>city.endsWith('pur') )
console.log(filteredCities)
