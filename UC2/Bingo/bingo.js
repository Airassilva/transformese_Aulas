const NOME_EVENTO = "Bingo dos Garotes!!!!"
let acabou = false;
let numerosSorteados = [];
let jogadores = [];

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * - Verifica se o jogo já acabou ou se todos os 75 números já foram sorteados;
 *   se sim, exibe mensagem de fim de jogo e encerra.
 * - Garante que o número sorteado ainda não foi sorteado antes.
 * - Adiciona o número sorteado ao array `numerosSorteados`.
 * - Exibe o número sorteado no console.
 * - Chama `verificarMarcacao` passando o índice 0 e o número sorteado.
 */
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

/**
 * - Recebe `restantes`: quantos jogadores ainda precisam ser cadastrados.
 * - Se `restantes` for 0, exibe os nomes de todos os jogadores cadastrados
 *   e chama `sortearNumero` para iniciar o jogo.
 * - Caso contrário, pergunta o nome do próximo jogador, adiciona ao array
 *   `jogadores` com nome e `numerosMarcados` vazio, e chama a si mesma
 *   com `restantes - 1`.
 */
function pedirNomeJogador(restantes) {
    if (restantes === 0) {
        console.log("\nJogadores cadastrados:");
        for (let i = 0; i < jogadores.length; i++) {
            console.log(`- ${jogadores[i].nome}`);
        }
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

/**
 * - Recebe `indiceJogador`: índice do jogador atual no array `jogadores`.
 * - Recebe `numeroSorteado`: o número que foi sorteado nesta rodada.
 * - Se `indiceJogador` for maior ou igual ao total de jogadores,
 *   todos já responderam: chama `sortearNumero` para a próxima rodada.
 * - Pergunta ao jogador atual se marcou (S/s ou N/n):
 *     - "S": adiciona `numeroSorteado` ao array `numerosMarcados` do jogador.
 *            TODO: verificar se o jogador atingiu a quantidade necessária para BINGO.
 *     - "N": apenas avança para o próximo jogador.
 *     - Outro valor: exibe mensagem de erro e repete a pergunta para o mesmo jogador.
 * - Ao finalizar, chama a si mesma com `indiceJogador + 1` para o próximo jogador.
 */
function verificarMarcacao(indiceJogador, numeroSorteado) {
    if (indiceJogador >= jogadores.length) {
        sortearNumero();
        return;
    }

    const jogador = jogadores[indiceJogador];

    rl.question(`O jogador ${jogador.nome} marcou o número ${numeroSorteado}? (S/N): `, function (resposta) {
        if (resposta === "S" || resposta === "s") {
            jogadores[indiceJogador].numerosMarcados.push(numeroSorteado);
            console.log(`${jogador.nome} marcou o número ${numeroSorteado}!`);
            verificarMarcacao(indiceJogador + 1, numeroSorteado);
        } else if (resposta === "N" || resposta === "n") {
            console.log(`${jogador.nome} não marcou.`);
            verificarMarcacao(indiceJogador + 1, numeroSorteado);
        } else {
            console.log("Resposta inválida! Digite apenas S/s ou N/n.");
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