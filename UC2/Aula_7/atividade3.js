const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite 1 para sortear e 2 para sair: ", function(numero){
    if(numero === "1"){
        const sorteio = Math.floor(Math.random() * 10) + 1;
        console.log("Número sorteado: " + sorteio);
    }else if(numero === "2"){
        console.log("Saindo...");
    }else{
        console.log("Opção inválida!");
    }
    rl.close();
});    