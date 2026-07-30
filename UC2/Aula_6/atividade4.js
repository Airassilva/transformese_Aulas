const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite o saldo: ", function(saldo){
    let umPorcento = saldo * 0.01;
    let valorFinal = parseFloat(saldo) - parseFloat(umPorcento);
    console.log("O valor final é: ", valorFinal.toFixed(2));
    rl.close();
});