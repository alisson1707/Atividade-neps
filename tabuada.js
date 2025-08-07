// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const X = parseInt(input.trim());

for (let i = 1; i <= 10; i++) {
  console.log(`${X} * ${i} = ${X * i}`);
}
