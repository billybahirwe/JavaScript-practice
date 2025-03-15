//parents,siblings and children
let parents=document.getElementById("produce")
console.log(parents.children)
console.log(parents.firstElementChild.textContent)
console.log(parents.lastElementChild.textContent)

let child=document.getElementById("text")
console.log(child.parentElement)

let middleSibling=document.getElementById("middle")
console.log(middleSibling.previousElementSibling.textContent)