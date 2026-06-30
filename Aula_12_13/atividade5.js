let numeros = [];

for (let i = 1; i <= 20; i++) {
    numeros.push(i);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
        numeros.splice(i, 1);
        i--; 
    }
}

console.log(numeros);