let cities="Pune,Goa,Mumbai,Indore,Kolkata"

let cityList=cities.split(',');//comma acts as delimiter

for(let city of cityList)
    console.log(city)

console.log("\n split with limit")
let cityListLmt =cities.split(',',4)
cityListLmt.forEach(city=>console.log(city))
