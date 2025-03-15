//     let btn= document.getElementById("btn")
//      btn.onclick= function (){ 
//        console.log("button clicked")
// }
//create a function to create an element in DOM
function create(){
    const paragraph=document.createElement("p")
    paragraph.innerHTML = "what is your name?"
    document.body.appendChild(paragraph)
    //console.log("button clicked")
}

//to read an element in the DOM
function read(){
    const readQN=document.getElementById("readQn")
    console.log("file read")
}

//to update an element in the DOM
function update(){
    const updateQn=document.getElementById("updateQn")
}

//to delete a function in the DOM
function erase(){
     const deleteQn=document.getElementById("deleteQn")
}