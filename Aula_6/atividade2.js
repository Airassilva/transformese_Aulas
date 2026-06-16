//Pedro
const readline = require("readline");
 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
 
rl.question("Digite um Número: ", function(numero){
    if (numero == "1"){
     console.log("o dia é Domingo ");
    }else if(numero == "2"){
        console.log("o dia é Segunda")
    }else if(numero == "3"){
        console.log("O dia é terça")
    }else if(numero == "4"){
        console.log("O dia é Quarta")
    }else if(numero == "5"){
        console.log("O dia é Quinta")
    }else if (numero == "6"){
        console.log("O dia é Sábado")
    }else{
        console.log("Número inválido")
    }
    rl.close();
});
 
 