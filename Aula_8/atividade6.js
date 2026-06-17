//Lucas

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o seu peso? ', function (peso) {
    rl.question('Qual a sua altura? ', function (altura) {

        let pesoDaPessoa = Number(peso);
        let alturaDaPessoa = Number(altura);

        if (pesoDaPessoa <= 0 || alturaDaPessoa <= 0) {
            console.log("Peso ou altura inválidos.");
        } else {

            let imc = pesoDaPessoa / (alturaDaPessoa * alturaDaPessoa);

            if (imc < 18.5) {
                console.log(`Seu IMC é ${imc.toFixed(2)}. Abaixo do peso.`);
            } else if (imc >= 18.5 && imc <= 24.9) {
                console.log(`Seu IMC é ${imc.toFixed(2)}. Peso normal.`);
            } else if (imc >= 25 && imc <= 29.9) {
                console.log(`Seu IMC é ${imc.toFixed(2)}. Sobrepeso.`);
            } else {
                console.log(`Seu IMC é ${imc.toFixed(2)}. Obesidade.`);
            }
        }
        rl.close();
    });
});