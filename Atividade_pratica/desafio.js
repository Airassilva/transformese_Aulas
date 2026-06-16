const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Digite o nome do aluno: ", function(nomeAluno){
    rl.question("Digite a primeira nota: ", function(nota1){
        rl.question("Digite a segunda nota: ", function(nota2){
            let media = (parseFloat(nota1) + parseFloat(nota2)) / 2;
            console.log("Nome do aluno: ", nomeAluno + "\nMédia: ", media);
            if(media >= 7){
                console.log("O aluno está aprovado!");
            } else if(media >= 5){
                console.log("O aluno está de recuperação!");
            }
         rl.close();
        })
    })
});
