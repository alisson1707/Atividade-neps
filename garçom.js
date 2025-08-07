const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.trim().split("\n");

const N = parseInt(linhas[0]);

let coposQuebrados = 0;

for (let i = 1; i <= N; i++) {
  const [latas, copos] = linhas[i].split(" ").map(Number);
  if (latas > copos) {
    coposQuebrados += copos;
  }
}

console.log(coposQuebrados);