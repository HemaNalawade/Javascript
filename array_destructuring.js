let arr =[80,50,40,70,20,10]
//destructuring array
let[a,b,c,d,e]=arr;
console.log("a:",a)
console.log("b:",b)
console.log("c:",c)
console.log("d:",d)
console.log("e:",e)

//partially destructuring array
let [x,y,z]=arr;
console.log("x",x)
console.log("y",y)
console.log("z",z)

let [x1,,x2,,x3]=arr;
console.log("x1: "+x1+"x2: "+x2+"x3: "+x3)

let [c1,,c2,,,c3]=arr;
console.log("c1:" +c1 +"c2:"+c2 +"c3:"+c3)

let[,,,b1,b2,b3]=arr;
console.log("b1:" +b1 +"b2:"+b2 +"b3:"+b3)

let [s1,s2,s3=60,s4,s5,s6=7000,s7]=arr;
console.log(`s1:${s1}`)
console.log(`s2:${s2}`)
console.log(`s3:${s3}`)
console.log(`s4:${s4}`)
console.log(`s5:${s5}`)
console.log(`s6:${s6}`)
console.log(`s7:${s7}`)

// syntax let[v1,v2,...args]=arr;
//args contains all rest value
let[d1,d2,...args]=arr;
console.log(`d1:${d1}`)
console.log(`d2:${d2}`)

console.log(`${args}`)
// rest  like args or h, s ,k element is anything
let[z1,z2,...h]=arr;
console.log(`z1:${z1}`)
console.log(`z2:${z2}`)

console.log(`${h}`)

function fun([p1,p2,p3]){
    console.log("p1:",p1)
    console.log("p2:",p2)
    console.log("p3:",p3)
    
}
//fun([2,4,5])
let cities=["Pune","goa","mumbai"]
fun(cities)

function getStates(){
    return["maharashtra","Kranataka","Telangana"]
}
let[state1,state2,state3]=getStates()
console.log(state1)
console.log(state2)
console.log(state3)
