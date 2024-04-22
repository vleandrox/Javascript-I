const h1Selector= document.getElementById("titulo")
console.log(h1Selector)
console.log(h1Selector.id)
console.log(h1Selector.className)

const clasSelector = document.getElementsByClassName("span-class")
console.log(clasSelector)

const tagSelector = document.getElementsByTagName("p")
console.log(tagSelector)

const selector = document.querySelector("h1")
const selector1 = document.querySelector(".span-class")
const selector2 = document.querySelector("#titulo")