const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let X = parseInt(input.split("\n")[0])

// Seu código vai aqui
const x = parseInt(input.trim());

if (x > 0) {
  console.log("positivo");
} else if (x < 0) {
  console.log("negativo");
} else {
  console.log("nulo");
}