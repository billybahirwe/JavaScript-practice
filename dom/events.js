//eventListener vs eventHandler

//eventHandler
let btn= document.getElementById("btn")
      btn.onclick= function (){ 
        console.log("button clicked")
}
btn.onclick= function (){ 
    console.log("overWritten")
}
//element.onclick=function

//event listener
let btn= document.getElementById("btn")
btn.addEventListener("click" ,function (){
    console.log("button clicked")
})
btn.addEventListener("click" ,function (){
    console.log("second eventListener")
})
//addEventListener(event,function)
//you can remove one or entire

function sayHello(){
    console.log("Hello");
}
btn.addEventListener("click", sayHello)
btn.removeEventListener("click",sayHello)