/**
 * - Verifica se o jogo já acabou ou se todos os 75 números já foram sorteados;
 *   se sim, exibe mensagem de fim de jogo e encerra.
 * - Garante que o número sorteado ainda não foi sorteado antes.
 * - Adiciona o número sorteado ao array `numerosSorteados`.
 * - Exibe o número sorteado no console.
 * - Chama `verificarMarcacao` passando o índice 0 e o número sorteado.
 */
function sortearNumero() { }

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
        console.log("Jogadores cadastrados:");
        for (let i = 0; i < jogadores.length; i++) {
            console.log(jogadores[i].nome);
        }
        return;
    }
    let nome = prompt("Digite o nome do jogador:");
    jogadores.push({
        nome: nome,
        numerosMarcados: []
    });
    pedirNomeJogador(restantes - 1);
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
    
    let resposta = prompt(
        `Jogador ${indiceJogador + 1}, você marcou o número ${numeroSorteado}? (S/N)`
    );

    if (resposta === "S" || resposta === "s") {
        jogadores[indiceJogador].numerosMarcados.push(numeroSorteado);
        verificarMarcacao(indiceJogador + 1, numeroSorteado);
    } else if (resposta === "N" || resposta === "n") {
        verificarMarcacao(indiceJogador + 1, numeroSorteado);
    } else {
        alert("Resposta inválida! Digite apenas S ou N.");
        verificarMarcacao(indiceJogador, numeroSorteado);
    }
}
