//Heloisa

let numeros = [15, 5, 12, 24, 19];

const soma = numeros.reduce((total, atual ) =>  total + atual, 0);
    const media = soma / numeros.length;
 
console.log(media);