const NOME_EVENTO = "Bingo dos Garotes!!!!"
let acabou = false;
let numerosSorteados = [];
let jogadores = [];
const readline = require("readline");
    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortearNumero() {
    if (acabou || numerosSorteados.length === 75) {
        acabou = true;
        console.log("O jogo TERMINOU!");
        rl.close();
        return; 
    }

    while (!acabou) {
        let numeroSorteado = Math.floor(Math.random() * 75) + 1;
        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
            console.log(`Número sorteado: ${numeroSorteado}`);  
            verificarMarcacao(0, numeroSorteado); 
            if (numerosSorteados.length === 75) {
                acabou = true;
            }
            break; 
        }
    }
}

function pedirNomeJogador(restantes) {
    if (restantes === 0) {
        const nomes = jogadores.map(j => j.nome).join(", ");
        console.log("\nOs jogadores cadastrados são: " + nomes);
        console.log("O jogo já pode começar!\n");
        sortearNumero();
        return;
    }

    rl.question(`Digite o nome do jogador ${jogadores.length + 1}: `, function (nome) {
        jogadores.push({ nome: nome, numerosMarcados: [] });
        console.log(`O jogador ${nome} foi adicionado ao jogo!`);
        pedirNomeJogador(restantes - 1);
    });
}

function verificarMarcacao(indiceJogador, numeroSorteado) { //add verificação se marcou o total necessário para BINGO
    if (indiceJogador >= jogadores.length) {
        sortearNumero();
        return;
    }

    const jogador = jogadores[indiceJogador];

    rl.question(`O jogador ${jogador.nome} marcou? Digite S/s ou N/n: `, function (marcou) {
        marcou = marcou.toUpperCase();

        if (marcou === "S") {
            jogador.numerosMarcados.push(numeroSorteado);
            console.log(`${jogador.nome} marcou o número ${numeroSorteado}!`);
            verificarMarcacao(indiceJogador + 1, numeroSorteado);
        } else if (marcou === "N") {
            console.log(`${jogador.nome} não marcou.`);
            verificarMarcacao(indiceJogador + 1, numeroSorteado);
        } else {
            console.log("Valor inválido, digite S/s ou N/n!");
            verificarMarcacao(indiceJogador, numeroSorteado); 
        }
    });
}

console.log(`Bem-vindo ao ${NOME_EVENTO}`);
rl.question("Me diga o número de pessoas que irão jogar: ", function (numPessoas) {
    let totalJogadores = Number(numPessoas);
        
    if (isNaN(totalJogadores) || totalJogadores <= 0) {
        console.log("Por favor, insira um número válido de jogadores.");
        rl.close();
        return;
    }
    pedirNomeJogador(totalJogadores);
});


