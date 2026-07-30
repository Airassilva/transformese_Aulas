const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", function (num) {
    let numero = Number(num);
    let raiz = Math.floor(Math.sqrt(numero));
    console.log("A raiz quadrada de " + numero + " é: " + raiz);
    rl.close();
});