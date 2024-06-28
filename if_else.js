var a = 10, b = 20, max;
//checking maximun of two values
if(a>b){
    max=a;
}else{
    max=b;
}
//printing maximum value
console.log("maximum is:",max)
var x=5, y=8,z=3;
if(x>y){
  if(x>z){//nested if else
     console.log("max is x:",x)
  }else{
    console.log("max is z:",z)
  }
}else{
   if(y>z){//nested if else
    console.log("max is y:",y)
   }else{
    console.log("max is z:",z)
   }
}

if(x>y && x>z){
    console.log("x is greter that y and z")
}else if(y>z){
    console.log("y is greter that x and z")
}else{
    console.log("z is greter that x and y")
}