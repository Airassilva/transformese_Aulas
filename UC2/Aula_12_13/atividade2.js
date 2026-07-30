//Pedro

let tentativas = 0;

while (true){
    let numero = Math.floor(Math.random() * 10) + 1;
    tentativas = tentativas + 1;
    console.log("Todos os número sorteados: ", numero);
        if (numero === 7 ){
            console.log("Número 7 sorteado após", tentativas , "Tentativas!");
            break;
        }
    }