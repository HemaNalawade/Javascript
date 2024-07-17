let arr=[10,20,30]
console.log(arr)


//merging an arry into another array using spread opetaro
let arr1=[5,7,2,...arr]//merge one arr to arr1
console.log(arr1)

let arr2=[500,...arr,800]//merge one arr to arr1
console.log(arr2)

let arr3=[...arr,500,800]
console.log(arr3)

//cloning or copy  an array
let arrCp=[...arr]
console.log("Cloned array",arrCp)

//concatentate one array to another array using spread operator
let cityList1=["Pune","Goa","Benguluru"]
let cityList2=["Bombay","Indore"]

//concentenation using spread operator
let cities=[...cityList1,...cityList2]
console.log(cities)

let car={
    model:'Nexon',
    brand:"Tata",
    price:235678.00,
    specification:{
        mileage:20,
        power:114,
        cc:1500
    }


}
console.log("Original car",car)
//using (... is spread operator) spread operator,cloning car object literal
let myCar={...car}//shallow copying nested objects are not cloned or copied
myCar.specification={...car.specification}// deep copying each nested object is cloned seperatly


console.log("Cloning car",myCar)

//chaninging price of clone car
myCar.price =23456788.00
console.log("\nAfter changing price of clone car")
console.log("original car",car)
console.log("cloning car",myCar)

//chaning model name
car.model='Nexon -nextgen'
console.log("\nAfter changing price of clone car")
console.log("original car",car)
console.log("cloning car",myCar)

//changing the mileage of duplicate or cloned car
myCar.specification.mileage=22.7
console.log("\nAfter changing price of orignal car")
console.log("original car",car)
console.log("cloning car",myCar)

//chaing the power of original car
car.specification.power=115.6
console.log("\nAfter changing power of orignal car")
console.log("original car",car)
console.log("cloning car",myCar)