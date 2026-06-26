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
            adivinhar(); //chamada se valor inválido
            return;
        }

        tentativas++;

        if (palpite === numeroSecreto) {
            console.log("Você acertou!");
            rl.close(); //termina o processo caso acerto
        } else if (palpite < numeroSecreto) {
            console.log("O número secreto é maior.");
            adivinhar(); //chamada se errou para número menor
        } else {
            console.log("O número secreto é menor.");
            adivinhar(); //chamada se errou para número maior
        }
    });
}

adivinhar(); //chamada inicial 


// readline tem leitura assíncrona, dessa forma, não funciona bem com 
// while/for que funciona de forma síncrona disparando tudo de uma vez!!
// com isso em mente, a função adivinhar é chamada todas as vezes em que ocorre uma tentativa em que o usuario errou
// além da chamada inicial para iniciar o processo