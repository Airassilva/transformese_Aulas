const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma cor: ', function(cor) {
    let corDigitada = cor.toLowerCase();
    switch (corDigitada) {
        case 'verde':
            console.log("Pode seguir!");
            break;  
        case 'amarelo':
            console.log("Atenção reduza!");
            break;
        case 'verde':
            console.log("Pare!");
            break;
        default:
            console.log("Cor inválida!");
    }    rl.close();
});