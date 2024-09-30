
console.log("Skriv dit Javascript her")
let a = document.getElementById("one")

console.log(a)

// let list = document.getElementsByTagName("li")

//  console.log(list)

let newLielement = document.createElement("li")
 newLielement.setAttribute("class","hot")

 let newTextelement = document.createTextNode("Apple")

 newLielement.append(newTextelement)


document.getElementById("firstul").append(newLielement)




console.log("slut på JavaScript")
