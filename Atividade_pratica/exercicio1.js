const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question("Qual o seu nome? ", function(resposta){
    console.log("Bem-vindo, ", resposta);
    rl.close();
});