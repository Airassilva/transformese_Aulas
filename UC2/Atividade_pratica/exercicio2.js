//Laura
const readline = require("readline");
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
 
rl.question("qual seu nome?:", function(nome){
    rl.question("qual sua ativide favorita?:", function(atividadeFavorita){
      console.log(nome,atividadeFavorita);
      rl.close();
    })
});
