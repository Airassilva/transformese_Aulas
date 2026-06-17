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

//Pedro

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Digite sua idade: ", function (idade) {
    if (idade >= 1 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 12 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Adulto")
    } else if (idade >= 60 && idade <= 110) {
        console.log("Idoso")
    } else {
        console.log("Idade inválida ")

    }
    rl.close();
});