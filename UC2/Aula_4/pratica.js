const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite o nome do evento: ", function(evento){
    rl.question("Digite o número de jogadores: ", function(jogadores){
        rl.question("Quantos números foram sorteados? ", function(numeroSorteados){
        let falta = 75;
        let resposta = falta - numeroSorteados;
        console.log("Nome do evento: ", evento + "\nNúmero de jogadores: ", jogadores)
        console.log("Faltam: ", resposta);
         rl.close();
        })
    })
});

rl.question("Digite um número: ", function(numero){
    if(numero == 38){
        console.log("O número é igual 38");
    }if(numero > 38){
        console.log("O número é maior que 38");
    }
    rl.close();
});

rl.question("Quantos números foram sorteados? ", function(numeroSorteados){
    let falta = 38;
    let resposta = falta - numeroSorteados;
    console.log("Faltam: ", resposta);
    rl.close();
});