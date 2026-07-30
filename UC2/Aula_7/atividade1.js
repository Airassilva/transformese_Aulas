const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite um número: ", function(numero){
    if(numero >= 9 && numero <= 10){
        console.log("Excelente!")
    }else if(numero >= 7){
        console.log("Bom!")
    }else if(numero >= 5){
        console.log("Regular!")
    }else{
        console.log("Insuficiente!")
    }
    rl.close();
});    