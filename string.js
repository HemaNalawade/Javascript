let name="om kumar"
console.log(name)

let message="good evening"
console.log(message)

let greeting =`Hii I'm ${name}, ${message}, how are you?`
console.log(greeting)
let a=10,b=20;
console.log(`addition of ${a} and ${b} is ${a+b} and ${a-b}`)//template literal

let personName="rahul kumar"
console.log(personName[2])
console.log("No of char in personName:",personName.length)
let idx=personName.indexOf("kumar")
console.log(`Starting index no of char u is ${idx}`)
idx=personName.indexOf("u")
console.log(`Starting index no of char u is ${idx}`)
idx=personName.lastIndexOf("u")
console.log(`Starting index no of char u is ${idx}`)
let ch=personName.charAt(7)
console.log(`charecter index no  is ${ch}`)

//concatention of strings using +operator(concatenation operator) 
let greetingMsg="hello " + personName
console.log(greetingMsg)

//concatenation of string using short and operator +=
let message1="good"
message1 += " morning"
console.log(message1)

let firstName="Malini"
let lastName="patil"

//concatation of string using concat() method
let fullName= firstName.concat(' ').concat(lastName)
console.log(fullName)
console.log("lowaer case full name", fullName.toLowerCase())
console.log(`Upper case full name:${fullName.toUpperCase()}`)