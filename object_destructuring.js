const person={
    name:"Kailash Mehta",
    age:24
}
//destructuring object
const{
    name:pName,
    age:personAge

}=person

console.log(`${pName}`)
console.log(`${personAge}`)

//object destructuring in the same name as property name
const{name,age} = person

console.log(`${name}`)
console.log(`${age}`)

//object destructuring as function 
function fun({model,brand,price}){
    console.log(`Model:${model} Brand:${brand} Price:${price}`)

}
const bike={
    model:'Supernova 350',
    brand:'Royal Enfeild',
    price:3445667.00
}

fun(bike)
