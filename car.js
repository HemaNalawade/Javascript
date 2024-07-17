let car={
    'register no':'MH 14 GS 3454',
    model:'Nexa',
    brand:"Maruti suzuki",
    price:23456677.0,
    print : function(){
    console.log(`RTO No:${this['register no']}
        \tModel:${this.model}
        \tBrand:${this.brand}
        \tPrice:${this['price']}`)
    }
}
console.log("RTO No:",car['register no'])
console.log("Model of car :",car.model)
console.log("brand:",car['brand'])
console.log("car price :",car.price)


//upadating price of car object
car.price =1666666.000

console.log("upadate price :",car.price);
//console.log("using for in loop")
//for(let p in car)
  //  console.log(car[p])
//calling metho of car
car.print()