const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade inicial de bolas: ", (inicial) => {
    rl.question("Digite a quantidade máxima de bolas: ", (maximo) => {

        inicial = Number(inicial);
        maximo = Number(maximo);

        while (inicial <= maximo) {
            console.log("Praticando com " + inicial + " bolas.");
            inicial++;
        }

        rl.close();
    });
});