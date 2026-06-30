const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número que eu gerarei a tabuada: ", function(numero){
    let tabuada = Number(numero);
    for (let i = 1; i <= 10; i++) { //i é uma variavél que simboliza o valor inicial e fim do loop, além de sua iteração (i++)
                                    //(i++) = aumenta cada vez que roda o loop 
        console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }
    rl.close();
});