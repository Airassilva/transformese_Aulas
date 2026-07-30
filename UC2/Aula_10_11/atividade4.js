const readline = require("readline");
    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inicial: ", function (numeroInicial) {
    rl.question("Digite um número final: ", function (numeroFinal) {
        const inicio = Number(numeroInicial);
        const fim = Number(numeroFinal);
        for (let i = inicio; i <= fim; i++) {
            console.log(i);
        }
        rl.close();
    });
});