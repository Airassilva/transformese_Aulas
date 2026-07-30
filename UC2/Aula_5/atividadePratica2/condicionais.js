const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite um número: ", function(numero){
   if(numero>=1 && numero<=75 ){
        console.log("Número válido!");
   }else{
    console.log("Número inválido!")
   }
   rl.close();
});