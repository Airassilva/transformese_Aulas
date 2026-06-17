//Lucas

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o sua idade? ', function (idade) {
    let idadeDaPessoa = Number(idade);



    if (idadeDaPessoa >= 1 && idadeDaPessoa <= 12) {
        console.log("Criança!");
    } else if (idadeDaPessoa >= 13 && idadeDaPessoa <= 17) {
        console.log("Adolescente!");
    } else if (idadeDaPessoa >= 18 && idadeDaPessoa <= 59) {
        console.log("Adulto");
    } else if (idadeDaPessoa >= 60 && idadeDaPessoa <= 120) {
        console.log("Idoso");
    } else {
        console.log("Este número é inválido.");
    }
    rl.close();
});