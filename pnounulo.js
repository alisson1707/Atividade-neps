// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let BINO = parseInt(input.split("\n")[0])
let CINO = parseInt(input.split("\n")[1])

// Seu código vai aqui
resto=(BINO + CINO)%2
if(resto === 0){
    console.log("Bino")
}if(resto === 1){
    console.log("Cino")
}