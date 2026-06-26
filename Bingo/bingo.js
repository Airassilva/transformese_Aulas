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
        return; 
    }

    while (!acabou) {
       let numeroSorteado = Math.floor(Math.random() * 75) + 1;
        if (!numerosSorteados.includes(numeroSorteado)) {
            numerosSorteados.push(numeroSorteado);
            console.log(`Número sorteado: ${numeroSorteado}`);    
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
        rl.close(); 
        return;
    }

    rl.question(`Digite o nome do jogador ${jogadores.length + 1}: `, function (nome) {
        jogadores.push({
            nome: nome,
            numerosMarcados: [] 
        });
        console.log(`O jogador ${nome} foi adicionado ao jogo!`);
        pedirNomeJogador(restantes - 1);
    });
}

console.log(`Bem-vindo ao ${NOME_EVENTO}`);
rl.question("Me diga o número de pessoas que irão jogar: ", function (numPessoas) {
    let totalJogadores = Number(numPessoas);
        
    if (isNaN(totalJogadores) || totalJogadores <= 0) {
        console.log("Por favor, insira um número válido de jogadores.");
        return comecarJogo();
    }
    pedirNomeJogador(totalJogadores);
});



