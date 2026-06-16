const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question("Qual a sua altura? ", function(altura){
    rl.question("Qual o seu peso em Kg? ", function(peso){
        let imc = Number(peso) / (Number(altura) * Number(altura));
        console.log("Seu IMC é: ", imc.toFixed(2));
     rl.close();
    })
});