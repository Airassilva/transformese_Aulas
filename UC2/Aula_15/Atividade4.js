//Lucas
let numeros = [];
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quantos números você deseja inserir no array? ", function (resposta) {
    const quantidade = parseInt(resposta);

    // Função interna que se chama repetidamente até preencher o vetor
    function pedirNumero(indice) {
        if (indice < quantidade) {
            rl.question(`Digite o ${indice + 1}º número: `, function (num) {
                numeros.push(parseInt(num));
                pedirNumero(indice + 1); // Chama a função novamente para o próximo número
            });
        } else {
            const aoContrario = numeros.slice().reverse(); 
            console.log("\nNúmeros digitados (Array original):", numeros);
            console.log("Array ao contrário:", aoContrario);
            rl.close();
        }
    }

    // Inicia o processo pelo primeiro elemento (índice 0)
    pedirNumero(0);
});
