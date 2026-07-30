//Pedro e Laura
const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question("Digite seu Nome: ", function(resposta){
 
    rl.question("Digite sua idade: ", function(idade){
 
        rl.question("Digite seu Endereço: ", function(endereco){
 
            console.log("Suas informações: ",resposta,",", idade,",", endereco)
           
            rl.close();
        })
    })
});