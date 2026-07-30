let numeros = [];
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (num1) {
    rl.question("Digite um número: ", function (num2) {
       rl.question("Digite um número: ", function (num3) {
            numeros.push(parseInt(num1), parseInt(num2), parseInt(num3));
            let decrescente = numeros.toSorted((a, b) => b - a); // Ordena os números em ordem decrescente
            console.log("Números digitados: " + numeros);
            console.log("Números em ordem decrescente: " + decrescente);
            rl.close();
        });
    });
});