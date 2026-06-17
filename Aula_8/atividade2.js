//Lucas

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o valor da compra? ', function (compra) {
    let valorDaCompra = Number(compra);

    if (valorDaCompra >= 1 && valorDaCompra <= 50) {
        console.log("Sem Desconto!");
    } else if (valorDaCompra >= 51 && valorDaCompra <= 100) {
        let descontoDeDez = (valorDaCompra - (valorDaCompra * 0.10));
        console.log("10% de Desconto!, Você só irá pagar: R$", (descontoDeDez));
    } else if (valorDaCompra >= 101 && valorDaCompra <= 200) {
        let descontoDeVinte = (valorDaCompra - (valorDaCompra * 0.20));
        console.log("20% de Desconto!, Você só irá pagar: R$", (descontoDeVinte));
    } else if (valorDaCompra >= 201) {
        let descontoDeTrinta = (valorDaCompra - (valorDaCompra * 0.30));
        console.log("30% de Desconto!, Você só irá pagar: R$", (descontoDeTrinta));
    } else {
        console.log("Este número é inválido.");
    }
    rl.close();
});