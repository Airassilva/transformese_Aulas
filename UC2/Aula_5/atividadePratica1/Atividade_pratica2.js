const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question("Me passe a temperatura em Celsius: ", function(celsius){
    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    console.log("A temperatura em Fahrenheit é: ", fahrenheit.toFixed(2));
     rl.close();
});