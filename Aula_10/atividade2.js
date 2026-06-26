const readline = require("readline");
    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numerosSorteados;

function sortearNumero() {
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    console.log(`Número sorteado: ${numeroSorteado}`);
}

sortearNumero();
