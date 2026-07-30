//Laura
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("digite M para Matutino, V para vesperino ou N para noturno: ", function (turno) {
    if (turno == "M" || turno == "m") {
        console.log("Bom dia!");
    } else if (turno == "V" || turno == "v") {
        console.log("Boa tarde!");
    } else if (turno == "N" || turno == "n") {
        console.log("Boa noite!");
    } else {
        console.log("Valor inválido!");
    }
    rl.close();
});