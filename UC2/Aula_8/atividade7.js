const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um horário de 0 - 23: ", function (horario) {
    if (horario >= 0 && horario <= 5) {
        console.log("Madrugada!");
    } else if (horario >= 6 && horario <= 11) {
        console.log("Manhã!");
    } else if (horario >= 12 && horario <= 17) {
        console.log("Tarde!");
    } else if (horario >= 18 && horario <= 23) {
        console.log("Noite!");
    }else {
        console.log("Valor inválido!");
    }
    rl.close();
});