//Pedro

const readline = require("readline");
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
rl.question("Digite um número: ", function (num) {
    let primo = true;
    let numero = Number(num)
   if (num <= 1){
    console.log("Seu número não é primo")
   } else if (num === 2){
    console.log("Seu número é primo")
   } else if (num & 2 === 0){
    console.log("Seu número é primo")
   }else {
    for (let i = 3; i < Math.sqrt(num); i += 2){
        if (num % i === 0){
            console.log("Seu número não é Primo")
            break;  
        }
    } console.log("Seu número é Primo")
   } rl.close()
});
 