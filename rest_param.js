function show(x,y,...r){
    console.log("x",x)
    console.log("y",y)
    console.log("Size of rest parameter",r.length)
    for(let i=0;i<r.length;i++)
        console.log(r[i])
}
//calling 
show(10,30)
show(100,200,500,"Hello",true)
show(7,"Hi",45,"Bye",false,34,678,2)
show(7,"Hi",45,"Bye",false,34,678,2,34,76)