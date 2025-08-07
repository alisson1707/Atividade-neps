const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.trim().split("\n");
const UM = parseInt(linhas[0]);
const B = parseInt(linhas[1]);

const area = UM * B;

console.log(area);