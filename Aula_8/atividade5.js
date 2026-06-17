const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma temperatura em Celsius: ", function (celsius) {
    if(celsius <= 10) {
        console.log("Frio!");
    } else if (celsius > 10 && celsius <= 20) {
        console.log("Ameno!");
    } else if (celsius > 21 && celsius <= 35) {
        console.log("Quente!");
    }else if (celsius > 35) {
        console.log("Muito quente!");
    }else{
        console.log("Valor inválido!");
    }
    rl.close();
});