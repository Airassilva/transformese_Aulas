const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function adivinhar() {
    if (tentativas >= 3) {
        console.log(`Você perdeu! O número secreto era: ${numeroSecreto}`);
        rl.close();
        return;
    }

    rl.question("Digite um número entre 1 e 10: ", (resposta) => {
        let palpite = Number(resposta);

        if (palpite < 1 || palpite > 10) {
            console.log("Valor inválido, digite um número entre 1 e 10!");
            adivinhar();
            return;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            console.log("Você acertou!");
            rl.close();
        } else if (palpite < numeroSecreto) {
            console.log("O número secreto é maior.");
            adivinhar();
        } else {
            console.log("O número secreto é menor.");
            adivinhar();
        }
    });
}

adivinhar();
