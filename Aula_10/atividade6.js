const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número que eu gerarei a tabuada: ", function(numero){
    let tabuada = Number(numero);
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }
    rl.close();
});