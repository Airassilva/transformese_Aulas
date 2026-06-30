//Heloisa e Lucas

let numero = 0;
let tentativas = 0;

while (numero <= 60) {
    numero = Math.floor(Math.random() * 75) + 1;
    tentativas++; //tentativa++ = aumenta cada vez que o loop roda 

    console.log(`Sorteio ${tentativas}: ${numero}`);
}

console.log(`Foi necessário ${tentativas} tentativa(s).`);