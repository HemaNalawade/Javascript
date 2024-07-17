//create person object literal
let person ={
    name: "jaya mehta",
    age:23,
    gender:"female",
    weight: 58.4
}
//accessing properties of object literal
console.log("Person name:",person.name)
console.log("Age:",person['age'])
console.log("Gender:",person['gender'])
console.log("Weight:",person.weight)

//modify property  of object literal
person.age=25
person["weight"]=59.8
console.log(`updated age: ${person["age"]}`)
console.log(`updated weight: ${person["weight"]}`)

//print whole obj
console.log("using for in loop")
for(let prop in person)
    console.log(person[prop])

//adding new property in person

person.city="pune";
person.state="maharashtra"

console.log("City of person:",person.city)
console.log(`state:${person.state}`)

//check the property exits or not in object literal
console.log('city' in person)
console.log('weight' in person)
console.log('height' in person)

//remove property from object literal
if('state' in person){
    //if state property exists then remove
    delete person.state
    console.log("State property  delete")
}else
console.log("Sorry property 'state' not found")

//creating global function
function printInfo(){
console.log(`Name:${person.name} 
        Age:${person.age} 
        Gender:${person.gender} 
        Weight:${person.weight}
        City:${person.city}`)

}
//create method preoperty
person.show =printInfo
//calling methof obj literal
person.show();
