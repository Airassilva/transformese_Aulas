//Atividade prática
//Calcule a média de um aluno
let nota1 = 10;
let nota2 = 5;
let nota3 = 6;
let nota4 = 7;
let media = (nota1 + nota2 + nota3 + nota4)/4 ;
console.log(media);

//Exiba o resultado de 17%3
let resultado = 17%3;
console.log(resultado);

//Calcule o total de segundos em um dia
let horaDia = 24, horaMin = 60, minSegundo = 60;
let resultado2 = horaDia * horaMin * minSegundo;
console.log(resultado2);

//Considere A=6, B=7:
let A = 6, B = 7;
//A >= B
console.log(A>=B);
//A !== B
console.log(A!==B);
//A <= B
console.log(A<=B);
//B > A
console.log(B>A);
//B === A
console.log(A===B);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//exemplo aula 
const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//rl.question("Qual o seu nome? ", function(resposta){
//    console.log("Bem-vindo, ", resposta);
//    rl.close();
//})


rl.question("Digite um número: ", function(valor){
    let numero = Number(valor);
    console.log("Como número: ", numero);
    console.log("Tipo agora: ", typeof numero);
   // console.log("Você digitou: ", valor);
    //console.log("Tipo: ", typeof valor);
    rl.close();
});
