const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite um Número: ", function(numero){
    if(numero >= 1 && numero <= 75){
        console.log("O número é válido!")
    }else{
        console.log("Número inválido!")
    }
    rl.close();
});