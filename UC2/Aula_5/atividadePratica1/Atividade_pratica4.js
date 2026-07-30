//Heloisa
const readline = require ("readline")
 
const rl = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});
 
rl.question("Qual a base de um retângulo?",function(base){
    rl.question("Qual a altura de um retângulo?",function(altura){
        let area = base * altura;
        let perímetro = (base * 2) + (altura * 2);
        console.log("A área do retângulo é:", area ,"O perímetro do retângulo é:", perímetro );
        rl.close();
    })
});
 
 