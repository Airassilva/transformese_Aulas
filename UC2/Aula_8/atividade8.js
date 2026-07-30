const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um horário de 0 - 23 para saber se vai chegar a tempo: ', function (horario) {
    if (horario >= 15 && horario <= 16) {
        console.log("Vai chegar na hora tranquilamente!");
    } else if (horario >= 17 && horario <= 18) {
        console.log("Provavelmente vai chegar atrasado!");
    } else if (horario >= 19 && horario <= 20) {
        console.log("Desista!");
    }else{
        console.log("Valor inválido!");
    }
    rl.close();
});

//dificuldade em concentração para pensar no fluxo de respostas, por ser uma novidade (Heloisa), 
//lembrar da sintaxi (Pedro)
//dificuldade em organizar o código(identação), por esquecer de identar (George Lucas)