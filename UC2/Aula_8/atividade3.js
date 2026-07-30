const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (numero) {
    if (numero >= 1 && numero <= 25) {
        console.log("Faixa B!")
    } else if (numero >= 26 && numero <= 50) {
        console.log("Faixa I!")
    } else if (numero >= 51 && numero <= 75) {
        console.log("Faixa N!")
    } else {
        console.log("Número inválido. Digite um número entre 1 e 75.")
    }
    rl.close();
});
