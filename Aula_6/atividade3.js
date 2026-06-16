const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite o valor em reais: ", function(real){
    let taxa = 5.25;
    let dolares = parseFloat(real) / parseFloat(taxa);
     console.log("O valor em dólares é: ", dolares.toFixed(2));
    rl.close();
});